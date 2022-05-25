import { createSlice } from "@reduxjs/toolkit";
import { getTestUser } from "../utils/utils";

//Initial Data

const userData = JSON.parse(getTestUser());
const initialState = {
  value: userData,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    authLogout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, authLogout } = userSlice.actions;
export default userSlice.reducer;
