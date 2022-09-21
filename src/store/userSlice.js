import { createSlice } from "@reduxjs/toolkit";

//Initial Data

const userData = {
  user: "NordicR23",
  email: "nordic@gmail.com",
  hobbies: ["programing", "play basketball", "read books"],
};

export const userSlice = createSlice({
  name: "user",
  initialState: { userData },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    authLogout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, authLogout } = userSlice.actions;
export default userSlice.reducer;
