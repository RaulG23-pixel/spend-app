import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getUser,createUser, logIn } from "../services/userService";
import { getAccessToken } from "../utils/utils";

//Initial Data

const value = {
  username: "NordicR23",
  email: "nordic@gmail.com",
  hobbies: ["programing", "play basketball", "read books"],
};

const fetchUser = createAsyncThunk('state/user/get', async () => {
  const response = await getUser(getAccessToken());
  return response;
});

const storeUser = createAsyncThunk('state/user/set', async (data) => {
  const response = await createUser(data);
  return response;
});

const loginUser = createAsyncThunk('state/user/login', async (data) => {
  const response = await logIn(data);
  return response;
}); 


export const userSlice = createSlice({
  name: "user",
  initialState: { value },

  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },

    authLogout: (state) => {
      state.user = null;
    }
  },
});

export const { setUser, authLogout } = userSlice.actions;
export default userSlice.reducer;
