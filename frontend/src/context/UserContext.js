import { createContext, useReducer, useState } from "react";
import reducer from "./reducer";

const UserContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("cipherUser")) || null,
  theme: "light",
  loading: "false",
  alert: { open: false, severity: "info", message: "" },
  profileInfo: JSON.parse(localStorage.getItem("cipherProfile")) || null,
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
