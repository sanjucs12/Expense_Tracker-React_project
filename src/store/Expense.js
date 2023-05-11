import { createSlice } from "@reduxjs/toolkit";

const ExpenseInitialState = {
  items: [],
  tempitem: [],
  isupdate: false,
  TotalAmount: 0,
  darkmode: true,
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
      let totel = 0;
      action.payload.map((item) => (totel += Number(item.amount)));

      state.TotalAmount = totel;
      state.items = action.payload;
    },
    setIsupdate(state, action) {
      state.isupdate = action.payload;
    },

    removeItem: (state, action) => {
      //   console.log(action.payload);
      let totel = 0;
      action.payload.map((item) => (totel += Number(item.amount)));
      state.TotalAmount = totel;
      state.items = action.payload;
    },
    DarkmodeHandler(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const ExpenseSliceAction = ExpenseSlice.actions;
export default ExpenseSlice;
