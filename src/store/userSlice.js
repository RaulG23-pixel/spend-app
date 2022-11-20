import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, logIn, createUser } from "../services/userService";
import { removeAcessToken, setAccessToken } from "../utils/utils";
//Initial Data

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await getUser();
  return response;
});
export const LogInUser = createAsyncThunk("user/logInUser", async (data) => {
  const response = await logIn(data);
  return response;
});
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data) => {
    const response = await createUser(data);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: { data: null, status: "idle", error: null, isLogged: false },
  reducers: {
    authLogout: (state, action) => {
      state.data = null;
      state.status = "logged out";
      state.error = null;
      state.isLogged = false;
      removeAcessToken();
    },
  },
  extraReducers(builder) {
    builder
      /** Get User **/
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload === "Network Error") {
          state.status = "failed";
          state.data = null;
          state.error = "Error Connection failed";
        } else {
          state.status = "logged";
          state.data = action.payload.data;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = "There was an error on the server";
      })
      /** LOGIN**/
      .addCase(LogInUser.fulfilled, (state, action) => {
        if (action.payload.data.code === 401) {
          state.status = "invalid user";
          state.data = null;
          state.error = "Invalid user credentials";
        } else {
          state.status = "user logged";
          setAccessToken(action.payload.data.access_token);
          state.isLogged = true;
          state.error = null;
        }
      })
      .addCase(LogInUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(LogInUser.rejected, (state, action) => {
        state.error = action.error;
      })
      /** REGISTER USER **/
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.data.code === 201) {
          state.status = "user registered";
          const token = action.payload.data.access_token;
          setAccessToken(token);
          state.isLogged = true;
        } else {
          state.status = "register failed";
          state.data = null;
          state.isLogged = false;
          state.error = action.error;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "there was an error on the server";
      });
  },
});

export const { setUser, authLogout } = userSlice.actions;
export default userSlice.reducer;
