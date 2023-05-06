import React, { useState } from "react";

const FollowersCard = ({ data }) => {
  const [isFollowed, setIsFollowed] = useState(true);
  return (
    <div
      className="card w-100"
      style={{
        background: "var(--background)",
        color: "var(--text-color)",
      }}
    >
      <div className="card-body w-100">
        <div className="w-100 d-flex justify-content-center align-item-center">
          <img
            src={data.profile_image}
            alt=""
            className="rounded-circle"
            style={{ width: "80px", height: "80px" }}
          />
        </div>
        <p className="card-text d-flex flex-column">
          <h5 style={{ margin: "10px 0 5px 0" }}>
            {data.first_name.replace(/[a-zA-Z]/g, "*")} {data.last_name}
          </h5>
          <span style={{ fontSize: "15px" }}>{data.education}</span>
          <span style={{ fontSize: "15px" }}>
            {data.followers.length} Followers
          </span>
        </p>
        <button
          className="bg-button w-100 border-0 mt-0"
          style={{
            height: "35px",
            background: isFollowed ? "#f3912e" : "black",
          }}
          onClick={() => {
            setIsFollowed(!isFollowed);
          }}
        >
          {isFollowed ? "Follow" : "Unfollow"}
        </button>
      </div>
    </div>
  );
};

export default FollowersCard;
