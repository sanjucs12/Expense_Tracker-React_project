import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpenseList.module.css";

import { useSelector } from "react-redux";

const ExpenseList = (props) => {
  const item = useSelector((state) => state.expense.items);
  console.log(item);
  // console.log(ExpenseSliceAction);

  let EachListItem = item.map((item, index) => (
    <ExpenseItem
      onUpdate={props.onUpdate}
      id={item.id}
      key={index}
      amount={item.amount}
      categorys={item.categorys}
      description={item.description}
    ></ExpenseItem>
  ));
  return (
    <div className={classes["EachListItem-container"]}>
      <ul>{EachListItem}</ul>
    </div>
  );
};
export default ExpenseList;
