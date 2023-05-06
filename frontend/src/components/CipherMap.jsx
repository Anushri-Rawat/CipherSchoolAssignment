import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CipherMap = () => {
  const randomValues = getRange(500).map((index) => {
    return {
      date: shiftDate(new Date(), index),
      count: getRandomInt(0, 4),
    };
  });
  return (
    <>
      <CalendarHeatmap
        showWeekdayLabels={true}
        startDate={new Date().toDateString()}
        endDate={new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        ).toDateString()}
        values={randomValues}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`,
          };
        }}
      />
      <Tooltip />
      <div
        className="d-flex align-items-center justify-content-end p-0 gap-2"
        style={{ margin: "10px 0 0" }}
      >
        <span
          style={{
            fontSize: "1em",
            padding: "0 8px",
            color: "var(--text-color)",
          }}
        >
          Less
        </span>
        <span
          style={{ width: "12px", height: "12px", background: "#fff" }}
        ></span>
        <span
          style={{ width: "12px", height: "12px", background: "#f3dcc4" }}
        ></span>
        <span
          style={{ width: "12px", height: "12px", background: "#e5b583" }}
        ></span>
        <span
          style={{ width: "12px", height: "12px", background: "#d48432" }}
        ></span>
        <span
          style={{ width: "12px", height: "12px", background: "#c87a2a" }}
        ></span>
        <span style={{ color: "var(--text-color)" }}>More</span>
      </div>
    </>
  );
};

export default CipherMap;
