import React, { useContext } from "react";
import LeftSidebarData from "../constants/LeftSidebarData";
import { logout } from "../assets";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { logoutFunc } from "../actions/userActions";

const LeftSideBar = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div
      className="d-none flex-column d-lg-flex position-fixed overflow-hidden justify-content-between"
      style={{
        background: "var(--background)",
        left: 0,
        bottom: 0,
        top: "51.8px",
        color: "var(--text-color2)",
        padding: "0.8rem 5px 0 5px",
        height: "calc(100vh - 52.8px)",
        fontSize: "9px",
        width: "67px",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <div className="d-flex flex-column justify-content-between">
        {LeftSidebarData.map((item) => {
          return (
            <div
              key={item.title}
              className="d-flex flex-column fw-600 mx-1 py-1 cursor-pointer text-center justify-center g-1 align-items-center"
              style={{ color: "var(--text-color2)", cursor: "pointer" }}
              onClick={() => {
                if (item.title === "Home") navigate("/");
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  color: "var(--text-color2)",
                  width: "18px",
                  height: "27px",
                }}
                className="svg"
              />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="mx-1">
        <hr
          className="w-100 mb-1"
          style={{ background: "var(--text-color2)", height: "1px" }}
        />
        <button
          className="d-flex flex-column mb-2 cursor-pointer text-center justify-content-center py-1 gap-1 align-items-center mx-1 border-0"
          style={{ color: "var(--text-color2)" }}
          onClick={() => {
            logoutFunc(dispatch);
          }}
        >
          <img
            src={logout}
            alt="logout"
            style={{
              color: "var(--text-color2)",
              width: "25px",
              height: "25px",
            }}
            className="svg"
          />
          <span>{user ? "Logout" : "Signin"}</span>
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
