import React, { useRef } from "react";
import classes from "./ExpenseForm.module.css";
import ExpenseList from "./ExpenseList";

const dummyobj = [
  { amount: "500", categorys: "Petrol", description: "some item" },
  { amount: "200", categorys: "Food", description: "some item" },
  { amount: "700", categorys: "Cloth", description: "some item" },
];
const ExpenseForm = () => {
  const enteredAmount = useRef(null);
  const enteredCategorys = useRef(null);
  const enteredDescription = useRef(null);
  const ExpenseFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredCategorys.current.value);
    const ExpenseObject = {
      amount: enteredAmount.current.value,
      categorys: enteredCategorys.current.value,
      description: enteredDescription.current.value,
    };
    console.log("ExpenseFormHandler", ExpenseObject);
  };
  return (
    <div className={classes["ExpenseForm-container"]}>
      <form className={classes["ExpenseForm"]} onSubmit={ExpenseFormHandler}>
        <h2>ExpenseForm</h2>
        <label htmlFor="amount">Amout</label>
        <input type="text" id="Amout" ref={enteredAmount}></input>
        <label htmlFor="cars"> category</label>
        <select name="categorys" id="categorys" ref={enteredCategorys}>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Cloths">Cloths</option>
          <option value="tavel">tavel</option>
        </select>
        <label htmlFor="description">description</label>
        <input type="text" id="description" ref={enteredDescription}></input>

        <button type="submit">submit</button>
      </form>
      <ExpenseList items={dummyobj}></ExpenseList>
    </div>
  );
};
export default ExpenseForm;
