import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpenseList.module.css";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const ExpenseList = (props) => {
  const ctx = useContext(ExpenseContext);
  console.log(ctx.Expenseobject);

  let EachListItem = ctx.Expenseobject.map((item, index) => (
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
