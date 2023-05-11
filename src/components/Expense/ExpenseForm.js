import React, { useRef, useEffect } from "react";
import classes from "./ExpenseForm.module.css";
import ExpenseList from "./ExpenseList";

import { ExpenseSliceAction } from "../../store/Expense";
import { useSelector, useDispatch } from "react-redux";

const ExpenseForm = () => {
  const Dispatch = useDispatch();
  const isupdate = useSelector((state) => state.expense.isupdate);
  const temp = useSelector((state) => state.expense.tempitem);

  const enteredAmount = useRef(null);
  const enteredCategorys = useRef(null);
  const enteredDescription = useRef(null);

  const ExpenseFormHandler = async (event) => {
    event.preventDefault();
    //console.log(enteredCategorys.current.value);
    let itemid = localStorage.getItem("itemid");
    // console.log(itemid);
    const ExpenseObject = {
      amount: enteredAmount.current.value,
      categorys: enteredCategorys.current.value,
      description: enteredDescription.current.value,
    };
    try {
      const response = await fetch(
        `https://expense-tracker-auth-a692a-default-rtdb.firebaseio.com/expense/${
          isupdate ? itemid : ""
        }.json`,
        {
          method: isupdate ? "PUT" : "POST",
          body: JSON.stringify(ExpenseObject),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      Dispatch(ExpenseSliceAction.updateList(ExpenseObject));

      enteredAmount.current.value = null;
      enteredCategorys.current.value = null;
      enteredDescription.current.value = null;
    } catch (error) {
      console.log(error.message);
    }
    // setExpenseObj([ExpenseObject]);
    //console.log("ExpenseFormHandler", ExpenseObject);
  };

  useEffect(() => {
    // ctx.getItemList();
    const ExpenseFormHandler = async () => {
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
        Dispatch(ExpenseSliceAction.AddItem(transformeddata));
      } catch (error) {
        console.log(error.message);
      }
    };
    ExpenseFormHandler();
  }, [temp]);
  const onUpdateHandler = (item) => {
    //setisupdate(true);
    Dispatch(ExpenseSliceAction.setIsupdate(true));
    enteredAmount.current.value = item.amount;
    enteredCategorys.current.value = item.categorys;
    enteredDescription.current.value = item.description;
    localStorage.setItem("itemid", item.id);
    // console.log(item);
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
          <option value="Cloths">Clothes</option>
          <option value="tavel">tavel</option>
        </select>
        <label htmlFor="description">description</label>
        <input type="text" id="description" ref={enteredDescription}></input>

        <button type="submit">{!isupdate ? "submit" : "update"}</button>
      </form>
      <ExpenseList onUpdate={onUpdateHandler}></ExpenseList>
    </div>
  );
};
export default ExpenseForm;
