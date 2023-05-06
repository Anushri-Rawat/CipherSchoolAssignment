import React, { useContext, useEffect, useState } from "react";
import FollowersCard from "./FollowersCard";
import UserContext from "../context/UserContext";

const Followers = () => {
  const {
    state: { profileInfo },
  } = useContext(UserContext);
  return (
    <div
      className="d-flex"
      style={{
        padding: "10px 40px 0",
        background: "var(--second-white)",
        minHeight: "calc(100vh - 52.8px)",
      }}
    >
      <div
        className="d-flex flex-column w-100 followerSection"
        style={{ padding: "0.8em 0", marginLeft: "66px" }}
      >
        <div
          className="fw-bold"
          style={{ color: "var(--text-color2)", fontSize: "18px" }}
        >
          Users Following You
        </div>
        <div className="user-followers-rows d-flex justify-content-center align-items-center w-100">
          {profileInfo ? (
            profileInfo.followers.length > 0 ? (
              // <div className="row row-cols-auto g-3">
              <div className="followers-card-container">
                {profileInfo.followers.map((follower) => (
                  <FollowersCard data={follower} />
                ))}
              </div>
            ) : (
              <h1
                className="fw-bolder"
                style={{
                  color: "var(--text-color)",
                  fontSize: "50px",
                  opacity: "0.2",
                }}
              >
                No One Following You
              </h1>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Followers;
