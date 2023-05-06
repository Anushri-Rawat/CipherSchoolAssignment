const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "USER_PROFILE":
      return { ...state, profileInfo: action.payload };
    case "USER_UPDATE":
      return { ...state, profileInfo: action.payload };
    case "UPDATE_ALERT":
      return { ...state, alert: action.payload };
    case "USER_LOGOUT":
      return {
        user: null,
        theme: "light",
        loading: "false",
        password: "",
        profileInfo: null,
      };
    default:
      return { ...state };
  }
};
export default reducer;
