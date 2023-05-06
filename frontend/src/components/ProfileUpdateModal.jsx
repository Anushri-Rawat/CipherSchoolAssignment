import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { updateProfile } from "../actions/userActions";

const ProfileUpdateModal = ({ data }) => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  console.log(data);
  const [firstname, setFirstname] = useState(data?.first_name);
  const [lastname, setLastname] = useState(data?.last_name);
  const [email, setEmail] = useState(data?.email);
  const [mobile, setMobile] = useState(data?.phone_number);
  const [profileImg, setProfileImg] = useState(data?.profile_image);
  const [file, setFile] = useState("");

  const uploadImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setProfileImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div
      className="modal fade"
      id="profileUpdateModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered">
        <div
          className="modal-content d-flex flex-column gap-1"
          style={{ background: "var(--background)" }}
        >
          <div
            className="modal-header"
            style={{
              alignItems: "center",
              display: "grid",
              gridTemplateColumns: "1fr auto",
            }}
          >
            <span
              className="modal-title fw-bolder w-100"
              id="exampleModalLabel"
              style={{
                color: "var(--paragraph)",
                lineHeight: "1.25",
              }}
            >
              Profile Update
            </span>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex flex-sm-row flex-column gap-3 align-items-center ">
            <div className="p-0 p-sm-2" style={{ flexBasis: "40%" }}>
              <div
                className="d-flex align-items-center justify-content-center position-relative rounded-circle"
                style={{
                  background: "#bdbdbd",
                  height: "120px",
                  width: "120px",
                }}
              >
                <div
                  className="w-100 h-100 border border-dark rounded-circle"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={profileImg}
                    alt="img"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className="position-absolute d-flex justify-content-center align-items-center rounded-circle border-0"
                  style={{
                    background: "#202b47",
                    bottom: "0px",
                    left: "15px",
                    height: "25px",
                    width: "25px",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="d-none"
                    id="contained-button-file"
                    onChange={uploadImageHandler}
                  />
                  <label
                    htmlFor="contained-button-file"
                    style={{ cursor: "pointer" }}
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
                  </label>
                </div>
              </div>
            </div>
            <div className="form d-flex flex-column align-items-center mt-1 gap-1 w-100">
              <input
                type="text"
                className="modal-input"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                className="modal-input"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                type="email"
                className="modal-input"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                maxLength={10}
                className="modal-input"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-end border-0">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn"
              style={{ background: "#f3912e" }}
              onClick={() =>
                updateProfile(
                  user,
                  {
                    first_name: firstname,
                    last_name: lastname,
                    phone_number: mobile,
                    email,
                    profile_image: file,
                  },
                  dispatch
                )
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
