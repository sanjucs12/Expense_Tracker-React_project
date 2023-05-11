import React from "react";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <div>
      <li className={classes["ExpenseItem-li"]}>
        <p>{props.amount}</p>
        <p>{props.categorys}</p>
        <p>{props.description}</p>
      </li>
    </div>
  );
};
export default ExpenseItem;
