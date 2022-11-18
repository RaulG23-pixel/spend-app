import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../services/userService";
//Initial Data

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await getUser();
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState: { data: null, status: "idle", error: null },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    authLogout: (state) => {
      state.data = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "logged";
        state.data = action.payload.data;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const { setUser, authLogout } = userSlice.actions;
export default userSlice.reducer;
