import { createContext } from "react";

const ExpenseContext = createContext({
  Expenseobject: [],
  deleteItem: () => {},
  EditItem: () => {},
  AddItem: () => {},
  getItemList: () => {},
});

export default ExpenseContext;
