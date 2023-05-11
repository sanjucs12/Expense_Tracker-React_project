import { createSlice } from "@reduxjs/toolkit";

const ExpenseInitialState = {
  items: [],
  tempitem: [],
  isupdate: false,
};
const ExpenseSlice = createSlice({
  name: "expense",
  initialState: ExpenseInitialState,
  reducers: {
    updateList(state, action) {
      state.tempitem.push(action.payload);
    },
    AddItem: (state, action) => {
      //   state.items.push(action.payload);
      state.items = action.payload;
    },
    setIsupdate(state, action) {
      state.isupdate = action.payload;
    },

    removeItem: (state, action) => {
      //   console.log(action.payload);
      state.items = action.payload;
    },
  },
});

export const ExpenseSliceAction = ExpenseSlice.actions;
export default ExpenseSlice;
