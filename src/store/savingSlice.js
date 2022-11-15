import { createSlice } from "@reduxjs/toolkit";

//Initial Data

export const savingSlice = createSlice({
  name: "savings",
  initialState: { savingsData: [] },
  reducers: {
    setAllsavings: (state, action) => {
      state.savingsData = action.payload;
    },
    addSingleSaving: (state, action) => {
      state.savingsData.push(action.payload);
    },
    removeSingleSaving: (state, action) => {
      state.savingsData.filter((x) => x !== action.payload);
    },
  },
});

export const { setAllsavings, addSingleSaving, removeSingleSaving } =
  savingSlice.actions;
export default savingSlice.reducer;
