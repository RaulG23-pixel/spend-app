import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import expensesReducer from "./expenseSlice";
import savingReducer from "./savingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    expenses: expensesReducer,
    savings: savingReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});
