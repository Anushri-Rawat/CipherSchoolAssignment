import React, { useContext } from "react";
import Weblinks from "../constants/Weblinks";
import CipherMap from "./CipherMap";
import PasswordModal from "./PasswordModal";
import InterestModal from "./InterestModal";
import UserContext from "../context/UserContext";

const TopRow = ({ text, modal }) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <div
        className="fw-bolder text-uppercase"
        style={{
          color: "var(--text-color2)",
          fontSize: "16px",
          lineHeight: "25px",
        }}
      >
        {text}
      </div>
      <button
        type="button"
        className="bg-button border-0"
        style={{
          fontSize: "13px",
          height: "28px",
          width: "80px",
          margin: "0",
        }}
        data-bs-toggle={modal ? "modal" : ""}
        data-bs-target={modal ? `#${modal}Modal` : ""}
      >
        Edit
      </button>
    </div>
  );
};

const Profile = () => {
  const {
    state: { profileInfo },
    dispatch,
  } = useContext(UserContext);
  return (
    <div
      className="h-100 d-flex w-100 profileSection"
      style={{ padding: "0 67px 0 107px", background: "var(--second-white)" }}
    >
      <div
        className="d-fle flex-column w-100"
        style={{ padding: "30px 40px 30px 0px" }}
      >
        <div
          className="d-flex flex-column w-100 gap-3"
          style={{ paddingTop: "6px", height: "auto" }}
        >
          <TopRow text="About me" />
          <div
            className="d-flex rounded"
            style={{
              height: "100px",
              overflowX: "hidden",
              overflowY: "auto",
              padding: "0.75rem",
              background: "var(--background)",
            }}
          >
            <textarea
              className="d-flex border-0 w-100"
              placeholder="Add something about you"
              rows="4"
              disabled
              style={{
                background: "var(--background)",
                fontWeight: "500",
                color: "var(--paragraph)",
                fontSize: "14px",
                overflow: "hidden auto",
              }}
            />
          </div>
        </div>
        <div className="mp-underline"></div>
        <div className="d-flex flex-column">
          <div
            className="fw-bolder text-uppercase"
            style={{
              color: "var(--text-color2)",
              fontSize: "16px",
              lineHeight: "25px",
            }}
          >
            Cipher text
          </div>
          <CipherMap />
        </div>
        <div className="mp-underline"></div>
        <div className="d-flex flex-column w-100" style={{ height: "auto" }}>
          <TopRow text="On The Web" />
          <div className="w-100 web-links-grid">
            {Weblinks.map((item) => (
              <div
                className="d-flex flex-column position-relative w-100 my-1"
                key={item.id}
              >
                <div
                  className="fw-normal fs-6"
                  style={{ color: "var(--text-color2)", lineHeight: "1.5" }}
                >
                  {item.name}
                </div>
                <div
                  className="rounded d-flex mt-1"
                  style={{
                    padding: "0.5rem 1rem",
                    background: "var(--background)",
                  }}
                >
                  <span className="p-1 d-flex">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="rounded-circle svg"
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                  <input
                    type="text"
                    className="fs-6 w-100 border-0"
                    placeholder={item.name}
                    disabled
                    style={{
                      color: "rgba(8,15,15,0.75)",
                      background: "transparent",
                      lineHeight: "1.5",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mp-underline"></div>
        <div className="d-flex flex-column w-100" style={{ height: "auto" }}>
          <TopRow text="Professional Information" />
          <div className="web-links-grid">
            <div className="d-flex flex-column position-relative w-100 my-1">
              <div
                className="fw-normal fs-6"
                style={{ color: "var(--text-color2)", lineHeight: "1.5" }}
              >
                Highest Education
              </div>
              <div
                className="rounded d-flex mt-1"
                style={{
                  background: "var(--background)",
                  padding: "0.5rem 1rem",
                }}
              >
                <select
                  className="form-select border-0 p-0"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  style={{
                    background: "var(--background)",
                    outline: "none",
                    color: "var(--text-color)",
                  }}
                  disabled
                >
                  <option defaultValue="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                  <option value="Higher Secondary">Higher Secondary</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Post Graduation"> Post Graduation</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-column position-relative w-100 my-1">
              <div
                className="fw-normal fs-6"
                style={{ color: "var(--text-color2)", lineHeight: "1.5" }}
              >
                What do you do currently?
              </div>
              <div
                className="rounded d-flex mt-1"
                style={{
                  background: "var(--background)",
                  padding: "0.5rem 1rem",
                }}
              >
                <select
                  className="form-select border-0 p-0"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  style={{
                    background: "var(--background)",
                    outline: "none",
                    color: "var(--text-color)",
                  }}
                  disabled
                >
                  <option defaultValue={"Schooling"}>Schooling</option>
                  <option value="College Student">College Student</option>
                  <option value="Teaching">Teaching</option>
                  <option value="Job">Job</option>
                  <option value="Freelancing"> Freelancing</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mp-underline"></div>
        <div className="d-flex flex-column w-100" style={{ height: "auto" }}>
          <TopRow text="Password & Security" modal="password" />
          <div className="d-flex flex-column position-relative w-100 my-1">
            <div
              className="fw-normal fs-6"
              style={{ color: "var(--text-color2)", lineHeight: "1.5" }}
            >
              Password
            </div>
            <div
              className="rounded d-flex mt-1 "
              style={{
                padding: "0.5rem 1rem",
                background: "var(--background)",
              }}
            >
              <input
                type="password"
                className="border-0 p-0 w-100"
                style={{
                  background: "var(--background)",
                  color: "var(--paragraph)",
                }}
                placeholder="password"
                disabled
                value="1234567"
              />
            </div>
          </div>
        </div>
        <div className="mp-underline"></div>
        <div className="d-flex flex-column w-100" style={{ height: "auto" }}>
          <TopRow text="Interests" modal="interest" />
          <div className="d-flex flex-wrap mt-2 align-items-center gap-3">
            {profileInfo?.interests?.map((interest, i) => {
              return (
                <div className="interest-btn" key={i}>
                  {interest}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PasswordModal />
      <InterestModal />
    </div>
  );
};

export default Profile;
