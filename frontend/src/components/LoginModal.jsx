import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { login, register } from "../actions/userActions";

const LoginModal = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const authHandler = () => {
    if (isLogin) {
      login({ email, password }, dispatch);
    } else {
      register(
        {
          first_name: firstname,
          last_name: lastname,
          email,
          password,
          phone_number: phoneNumber,
        },
        dispatch
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ maxHeight: "100vh", overflow: "hidden" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div
          className="modal-content p-2"
          style={{
            background: "var(--background)",
            borderRadius: "30px",
            maxHeight: "calc(100vh - 3.5rem)",
          }}
        >
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title text-capitalize" id="exampleModalLabel">
              {isLogin ? "Sign in" : "Sign Up"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body"
            style={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            <div
              className="modal-body-container w-100"
              style={{
                borderRadius: "1rem",
              }}
            >
              <div className="d-flex gap-1 justify-content-center align-items-center">
                <img
                  src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                  style={{ height: "35px", width: "35px" }}
                  alt="cipher school logo"
                />
                <h1
                  className="fw-bold pl-1"
                  style={{ color: "var(--text-color)", fontSize: "25px" }}
                >
                  CipherSchools
                </h1>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center mt-2 text-center">
                <h3 className="fw-bold">Hey,Welcome!</h3>
                <p>Please provide your email and password to sign in</p>
              </div>
              <div className="form d-flex flex-column align-items-center mt-1 gap-1 w-100">
                {!isLogin && (
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                )}
                {!isLogin && (
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                )}
                <input
                  type="email"
                  className="modal-input"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!isLogin && (
                  <input
                    type="number"
                    maxLength={10}
                    className="modal-input"
                    placeholder="Phone(optional)"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                )}
                <input
                  type="password"
                  className="modal-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isLogin && (
                  <div
                    className="align-items-center justify-content-end d-flex"
                    style={{
                      width: "95%",
                      cursor: "pointer",
                      color: "var(--brand-color)",
                      fontSize: "14px",
                    }}
                  >
                    forgot password?
                  </div>
                )}
                <button
                  className="bg-button border-0"
                  onClick={authHandler}
                  data-bs-dismiss="modal"
                >
                  {isLogin ? "Sign in" : "Create Account"}
                </button>
              </div>
              <div
                className="d-flex align-items-center justify-content-center my-2 w-100"
                style={{ gap: "2px" }}
              >
                <div
                  className="fw-normal fs-6"
                  style={{
                    color: "var(--text-color)",
                    lineHeight: "34px",
                    letterSpacing: "-0.33px",
                  }}
                >
                  {isLogin
                    ? "Dont't have an account ?"
                    : "Already have an account?"}
                </div>
                <span
                  className="fs-6"
                  style={{
                    color: "#f3912e",
                    lineHeight: "1.5",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Get Started" : "Signin Now"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
