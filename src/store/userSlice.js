import { createSlice } from "@reduxjs/toolkit";

//Initial Data

export const userSlice = createSlice({
  name: "user",
  initialState: { userData: null },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    authLogout: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, authLogout } = userSlice.actions;
export default userSlice.reducer;
