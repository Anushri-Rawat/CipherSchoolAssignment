import "./App.css";
import Banner from "./components/Banner";
import Followers from "./components/Followers";
import LeftSideBar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import RightSidebar from "./components/RightSidebar";
import { Routes, Route } from "react-router-dom";
import UserContext, { UserContextProvider } from "./context/UserContext";
import { useContext, useEffect } from "react";
import LoginModal from "./components/LoginModal";
import { getMyProfile } from "./actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./components/Loading";

const Button = () => {
  return (
    <div
      className="d-flex w-100 justify-content-center align-items-center"
      style={{ height: "calc(100vh - 52px)" }}
    >
      <button
        className="bg-button border-0"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ width: "80px", height: "35px", fontSize: "15px" }}
      >
        Login
      </button>
      <LoginModal />
    </div>
  );
};

function App() {
  const {
    state: { theme, user, alert, profileInfo },
    dispatch,
  } = useContext(UserContext);

  useEffect(() => {
    if (user) getMyProfile(user, dispatch);
  }, [user]);

  useEffect(() => {
    if (alert && alert.open) {
      toast(alert.message, { type: alert ? alert.severity : "success" });
      dispatch({
        type: "UPDATE_ALERT",
        payload: { ...alert, open: false },
      });
    }
  }, [alert?.open]);

  return (
    <div className={theme}>
      <Navbar />
      <LeftSideBar />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              profileInfo ? (
                <>
                  <Banner />
                  <div className="d-flex">
                    <Profile />
                    <RightSidebar />
                  </div>
                </>
              ) : (
                <Loading />
              )
            ) : (
              <Button />
            )
          }
        />
        <Route path="/followers" element={<Followers />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
}

export default App;
