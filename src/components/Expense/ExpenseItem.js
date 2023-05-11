import React, { useContext } from "react";
import classes from "./ExpenseItem.module.css";
import ExpenseContext from "../../Context/ExpenseContext/ExpenseContext";

const ExpenseItem = (props) => {
  const ctx = useContext(ExpenseContext);
  const EditButtonHandler = () => {
    props.onUpdate(props);
    //console.log("EditButtonHandler", props);
  };
  const deleteButtonHandler = () => {
    ctx.deleteItem(props.id);
    // console.log("deleteButtonHandler", props);
    // try {
    //   const response = await fetch(
    //     `https://expense-tracker-auth-a692a-default-rtdb.firebaseio.com/expense/${props.id}.json`,
    //     {
    //       method: "DELETE",

    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const data = await response.json();
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  return (
    <div className={classes["ExpenseItem-li-container"]}>
      <li className={classes["ExpenseItem-li"]}>
        <p>{props.amount}</p>
        <p>{props.categorys}</p>
        <p>{props.description}</p>
        <div className={classes["btn-cont"]}>
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
