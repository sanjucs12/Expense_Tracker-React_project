import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import ExpenseSlice from "./Expense";

const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    expense: ExpenseSlice.reducer,
  },
});

export default Store;
