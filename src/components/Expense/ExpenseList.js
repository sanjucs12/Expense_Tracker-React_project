import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpenseList.module.css";

const ExpenseList = (props) => {
  const EachListItem = props.items.map((item) => (
    <ExpenseItem
      amount={item.amount}
      categorys={item.categorys}
      description={item.description}
    ></ExpenseItem>
  ));
  return (
    <div>
      <ul>{EachListItem}</ul>
    </div>
  );
};
export default ExpenseList;
