// Types for reducer
const types = {
  authLogout: "auth-logout",
  setUser: "set-user",
};

//Initial Data
const initialStore = {
  user: null,
};

function storeReducer(state, action) {
  switch (action.type) {
    case types.authLogout:
      return { ...state, user: null };
    case types.setUser:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
export { initialStore, types };
export default storeReducer;
