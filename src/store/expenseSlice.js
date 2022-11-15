import { createSlice } from "@reduxjs/toolkit";

//Initial Data

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: { expensesData: [] },
  reducers: {
    setAllExpenses: (state, action) => {
      state.expensesData = action.payload;
    },
    addSingleExpense: (state, action) => {
      state.expensesData.push(action.payload);
    },
    removeSingleExpense: (state, action) => {
      state.expensesData.filter((x) => x !== action.payload);
    },
  },
});

export const { setAllExpenses, addSingleExpense, removeSingleExpense } =
  expensesSlice.actions;
export default expensesSlice.reducer;
