import React from "react";
import classes from "./ExpenseItem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { ExpenseSliceAction } from "../../store/Expense";

const ExpenseItem = (props) => {
  const items = useSelector((state) => state.expense.items);
  const Premium = <button className={classes["Premium"]}>Premium</button>;
  const Dispatch = useDispatch();
  const EditButtonHandler = () => {
    props.onUpdate(props);
    //console.log("EditButtonHandler", props);
  };

  const filetredLits = (id, items) => {
    const list = items.filter((todo) => todo.id !== id);

    return list;
  };
  const deleteButtonHandler = async () => {
    // ctx.deleteItem(props.id);
    console.log("deleteButtonHandler", props);
    try {
      const response = await fetch(
        `https://expense-tracker-auth-a692a-default-rtdb.firebaseio.com/expense/${props.id}.json`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const list = await filetredLits(props.id, items);
      Dispatch(ExpenseSliceAction.removeItem(list));
    } catch (error) {
      console.log(error.message);

      // console.log(list);
      // Dispatch(ExpenseSliceAction.removeItem(list));
    }
  };
  return (
    <div className={classes["ExpenseItem-li-container"]}>
      <li className={classes["ExpenseItem-li"]}>
        <p>{props.amount}</p>
        <p>{props.categorys}</p>
        <p>{props.description}</p>

        <div className={classes["btn-cont"]}>
          {props.amount >= 10000 && Premium}
          <button onClick={EditButtonHandler} className={classes["edit-btn"]}>
            Edit
          </button>
          <button
            onClick={deleteButtonHandler}
            className={classes["delete-btn"]}
          >
            delete
          </button>
        </div>
      </li>
    </div>
  );
};
export default ExpenseItem;
