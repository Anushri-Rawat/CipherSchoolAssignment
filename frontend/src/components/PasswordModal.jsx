import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { updatePassword } from "../actions/userActions";

const PasswordModal = () => {
  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorObj, setErrorObj] = useState({ error: false, message: "" });
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const changlePasswordHandler = () => {
    if (newPassword === "" || confirmPassword === "") {
      setErrorObj({
        error: true,
        message: "New Password or confirm Password should not be empty",
      });
    }
    if (newPassword === confirmPassword && newPassword !== "") {
      updatePassword(
        user,
        { currentPassword: currPassword, newPassword },
        dispatch
      );
      setNewPassword("");
      setCurrPassword("");
      setConfirmPassword("");
    } else {
      setErrorObj({
        error: true,
        message: "New Password and confirm Password should be same",
      });
    }
  };
  return (
    <div
      className="modal fade"
      id="passwordModal"
      tabIndex="-1"
      aria-labelledby="interestLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-dialog-centered">
        <div
          className="modal-content d-flex flex-column gap-1"
          style={{ background: "var(--background)" }}
        >
          <div className="modal-header border-bottom-0 pb-0">
            <h5 className="modal-title text-capitalize">Update Password</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex flex-sm-row flex-column gap-2 align-items-center pb-3">
            <div className="form d-flex flex-column align-items-center mt-1 gap-1 w-100">
              {errorObj.error && (
                <div className="text-danger">{errorObj.message}</div>
              )}
              <input
                type="password"
                className="modal-input"
                placeholder="Current Password"
                value={currPassword}
                onChange={(e) => setCurrPassword(e.target.value)}
              />
              <input
                type="password"
                className="modal-input"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                className="modal-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setErrorObj({ ...errorObj, error: false })}
              />
              <div
                className="d-flex justify-content-end border-0 gap-2 pt-2"
                style={{ width: "90%" }}
              >
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
                  onClick={changlePasswordHandler}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PasswordModal;
