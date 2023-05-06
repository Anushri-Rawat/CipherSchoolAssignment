import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { updateProfile } from "../actions/userActions";

const interestArray = [
  "App Development",
  "Web Development",
  "Game Development",
  "Data Structures",
  "Programming",
  "Machine Learning",
  "Data Science",
  "Others",
];
const InterestModal = () => {
  const {
    state: { user, profileInfo },
    dispatch,
  } = useContext(UserContext);
  const [selectedInterest, setSelectedInterest] = useState(
    profileInfo.interests
  );

  return (
    <div
      className="modal fade"
      id="interestModal"
      tabIndex="-1"
      aria-labelledby="interestLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered">
        <div
          className="modal-content d-flex flex-column gap-1"
          style={{ background: "var(--background)" }}
        >
          <div
            className="modal-body d-flex flex-column justify-content-between w-100"
            style={{ padding: "2rem" }}
          >
            <div className="interest-modal">
              {interestArray.map((interest, i) => {
                return (
                  <div
                    key={i}
                    className="w-100 fw-medium d-flex
                    align-items-center px-3 interest-tag"
                    onClick={() => {
                      setSelectedInterest([...selectedInterest, interest]);
                    }}
                    style={{
                      background: selectedInterest.includes(interest)
                        ? "var(--brand-color)"
                        : "var(--second-white)",
                      color: selectedInterest.includes(interest)
                        ? "white"
                        : " var(--heading)",
                    }}
                  >
                    <span>{interest}</span>
                  </div>
                );
              })}
            </div>
            <div className="pt-3 d-flex justify-content-end border-0 gap-2">
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
                onClick={() => {
                  updateProfile(
                    user,
                    {
                      interests: selectedInterest,
                    },
                    dispatch
                  );
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestModal;
