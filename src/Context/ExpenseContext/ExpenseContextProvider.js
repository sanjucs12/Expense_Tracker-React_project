import React, { useState } from "react";
import ExpenseContext from "./ExpenseContext";

const ExpenseContextProvider = (props) => {
  const [Expenseobj, setExpenseobj] = useState([]);
  const addItem = (obj) => {
    setExpenseobj([...Expenseobj, obj]);
  };
  const getItemListHandler = async () => {
    try {
      const response = await fetch(
        "https://expense-tracker-auth-a692a-default-rtdb.firebaseio.com/expense.json",
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      //console.log(data);

      const transformeddata = [];

      for (const key in data) {
        const Obj = {
          id: key,
          ...data[key],
        };
        transformeddata.push(Obj);
      }
      // setExpenseObj([...transformeddata]);
      //ctx.AddItem(transformeddata);
      setExpenseobj([...transformeddata]);
      // console.log(transformeddata);
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteItemHandler = async (id) => {
    try {
      const response = await fetch(
        `https://expense-tracker-auth-a692a-default-rtdb.firebaseio.com/expense/${id}.json`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      getItemListHandler();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        Expenseobject: Expenseobj,
        AddItem: addItem,
        deleteItem: deleteItemHandler,
        getItemList: getItemListHandler,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContextProvider;
