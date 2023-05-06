import React, { useState } from "react";
import RightSidebarData from "../constants/RightSidebarData";

const RightSidebar = () => {
  const [active, setActive] = useState("Profile");
  return (
    <>
      <div
        className="d-lg-flex d-none flex-column position-fixed justify-content-between"
        style={{
          background: "var(--background)",
          right: 0,
          color: "var(--text-color2)",
          padding: "0.8rem 5px 0 5px",
          height: "calc(100vh - 59.8px)",
          fontSize: "9px",
          width: "67px",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <div
          className="position-absolute cursor-pointer d-flex justify-content-center align-items-center rounded-1 border"
          style={{
            background: "var(--background)",
            top: 0,
            left: "-29px",
            width: "30px",
            height: "40px",
          }}
        >
          <svg
            width="12"
            height="14"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="open rotate-180"
          >
            <path
              d="M6.71672 6.71713C7.10725 6.3266 7.10725 5.69344 6.71672 5.30291L2.12083 0.707019C1.73036 0.316554 1.09729 0.316554 0.706829 0.707019C0.316364 1.09748 0.316364 1.73055 0.706829 2.12102L3.89272 5.30691C4.28325 5.69744 4.28325 6.3306 3.89272 6.72113L0.706831 9.90702C0.316689 10.2972 0.317587 10.93 0.708834 11.319C1.09851 11.7065 1.72825 11.7056 2.11683 11.317L6.71672 6.71713Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div className="d-flex flex-column justify-content-between">
          {RightSidebarData.map((item) => {
            return (
              <div
                key={item.title}
                className={`d-flex ${
                  active == item.title ? "bg-button" : ""
                } flex-column fw-600 mx-1 py-1 cursor-pointer rounded-md-6 text-center justify-content-center gap-1 align-items-center`}
                style={{ color: "var(--text-color2)" }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    color: "var(--text-color2)",
                    width: "18px",
                    height: "27px",
                  }}
                  className={`${active == item.title ? "" : "svg"}`}
                />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default RightSidebar;
