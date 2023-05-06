import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProfileUpdateModal from "./ProfileUpdateModal";
import UserContext from "../context/UserContext";

const Banner = () => {
  const {
    state: { user, profileInfo },
  } = useContext(UserContext);

  return (
    <>
      <div className="banner position-sticky border">
        <div
          className="bg-opacity-50% d-flex justify-content-between"
          style={{
            backgroundImage:
              "url(https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png)",
            backgroundSize: "cover",
            minHeight: "110px",
          }}
        >
          <div
            className="d-flex gap-lg-5 gap-1 justify-content-start align-items-center"
            style={{
              backgroundImage:
                "linear-gradient(to right,var(--background),transparent,var(--background))",
              width: "100%",
              padding: "0 30px",
            }}
          >
            <div className="d-flex flex-column">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "90px",
                  height: "90px",
                  background: "#bdbdbd",
                  borderRadius: "50%",
                }}
              >
                <img
                  className="position-relative w-100 rounded-circle border border-dark"
                  style={{ objectFit: "cover", height: "90px" }}
                  src={profileInfo?.profile_image}
                  alt="profile_img"
                />
              </div>
              <button
                className="position-absolute d-flex justify-content-center align-items-center rounded-circle border-0"
                style={{
                  background: "#202b47",
                  bottom: "10px",
                  left: "15px",
                  height: "25px",
                  marginLeft: "22px",
                  width: "25px",
                  cursor: "pointer",
                }}
                data-bs-toggle="modal"
                data-bs-target="#profileUpdateModal"
              >
                <svg
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "14px", height: "14px" }}
                >
                  <path
                    d="M1.61176 17.6959L0.0393491 24.4821C-0.0148937 24.7301 -0.0130342 24.9872 0.0447916 25.2345C0.102617 25.4817 0.214949 25.713 0.37358 25.9112C0.532211 26.1095 0.733134 26.2699 0.961672 26.3806C1.19021 26.4913 1.44059 26.5495 1.69452 26.551C1.81284 26.563 1.93206 26.563 2.05038 26.551L8.87795 24.9786L21.9869 11.9194L14.671 4.62006L1.61176 17.6959Z"
                    fill="white"
                  ></path>
                  <path
                    d="M26.1082 5.38144L21.2255 0.498692C20.9045 0.179298 20.4701 0 20.0172 0C19.5644 0 19.13 0.179298 18.809 0.498692L16.0945 3.21317L23.402 10.5207L26.1165 7.80626C26.2754 7.6466 26.4012 7.45718 26.4868 7.24885C26.5723 7.04052 26.616 6.81735 26.6152 6.59213C26.6144 6.36691 26.5693 6.14405 26.4823 5.93631C26.3953 5.72856 26.2682 5.54001 26.1082 5.38144Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ flex: "1 1" }}
            >
              <div style={{ color: "var(--text-color2)" }}>
                <div style={{ fontSize: "20px" }}>Hello,</div>
                <div className="fw-bolder" style={{ fontSize: "24px" }}>
                  {user?.first_name} {user?.last_name}
                </div>
                <div style={{ fontSize: "14px" }}>{user?.email}</div>
              </div>
              <Link to={"/followers"} className="d-none d-sm-block">
                <div
                  className="fw-bold"
                  style={{ fontSize: "17px", color: "var(--heading)" }}
                >
                  {profileInfo?.followers?.length} Followers
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProfileUpdateModal data={profileInfo} />
    </>
  );
};

export default Banner;
