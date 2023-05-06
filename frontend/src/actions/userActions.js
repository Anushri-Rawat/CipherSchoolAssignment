import axios from "axios";
const BASE_URL = "http//localhost:5000";

export const register = async (data, dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `/api/users/register`;
    const response = await axios.post(url, data);
    dispatch({
      type: "SET_USER",
      payload: response.data,
    });
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "success",
        message: "User successfully registered",
      },
    });
    localStorage.setItem("cipherUser", JSON.stringify(response.data));
  } catch (err) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: err.response.data.message,
      },
    });
  }
};

export const login = async (data, dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `/api/users/login`;
    const response = await axios.post(url, data);
    dispatch({
      type: "SET_USER",
      payload: response.data,
    });
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "success",
        message: "User successfully login",
      },
    });
    localStorage.setItem("cipherUser", JSON.stringify(response.data));
  } catch (err) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: err.response.data.message,
      },
    });
  }
};

export const logoutFunc = (dispatch) => {
  localStorage.removeItem("cipherUser");
  localStorage.removeItem("cipherProfile");
  dispatch({ type: "USER_LOGOUT" });
};

export const getMyProfile = async (user, dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `/api/users`;
    const res = await axios.get(url, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({ type: "USER_PROFILE", payload: res.data });
    localStorage.setItem("cipherProfile", JSON.stringify(res.data));
  } catch (err) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: err.response.data.message,
      },
    });
  }
};

export const updateProfile = async (user, data, dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `/api/users`;
    const res = await axios.patch(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({ type: "USER_UPDATE", payload: res.data });
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "success",
        message: "User has been updated successfully",
      },
    });
    localStorage.setItem("cipherProfile", JSON.stringify(res.data));
  } catch (err) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: err.response.data.message,
      },
    });
  }
};

export const updatePassword = async (user, data, dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `/api/users/updatePassword`;
    const res = await axios.patch(url, data, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "success",
        message: "Password have been changed successfully",
      },
    });
  } catch (err) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: err.response.data.message,
      },
    });
  }
};
