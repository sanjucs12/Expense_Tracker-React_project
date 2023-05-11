import React from "react";
import classes from "./ThemeToggle.module.css";
import { ExpenseSliceAction } from "../../store/Expense";
import { useDispatch, useSelector } from "react-redux";
const ThemeToggle = (props) => {
  const dark = useSelector((state) => state.expense.darkmode);
  const Dispath = useDispatch();
  const ToggleHandler = () => {
    Dispath(ExpenseSliceAction.DarkmodeHandler());
    console.log("ToggleHandler");
  };
  return (
    <React.Fragment>
      <div className={classes[dark ? "dark-btn" : "light-btn"]}>
        <button className={classes["Premium-taggle"]} onClick={ToggleHandler}>
          {dark ? "DarkMode" : "LightMode"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ThemeToggle;
