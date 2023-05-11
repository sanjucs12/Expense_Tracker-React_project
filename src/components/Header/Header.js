import React from "react";
import classes from "./Header.module.css";
import { NavLink, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "../DarktTheme/ThemeToggle";
import Logout from "./Logout";
const Header = () => {
  const total = useSelector((state) => state.expense.TotalAmount);
  const Items = useSelector((state) => state.expense.items);
  const loginState = useSelector((state) => state.auth.loginState);
  // let loginState = false;
  // if (localStorage.getItem("id") === true) {
  //   loginState = true;
  //   console.log(loginState);
  // }

  const DownloadHandler = () => {
    console.log("DownloadHandler");

    const blob = new Blob([JSON.stringify(Items)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    console.log(link.href);
    link.download = "expense.csv";
    link.click();
    console.log(link);
  };
  const PremiumbuttonHandler = () => {
    console.log("PremiumbuttonHandler");
  };
  const Premium = (
    <div>
      <button onClick={PremiumbuttonHandler} className={classes["Premium"]}>
        Premium
      </button>
    </div>
  );
  return (
    <div className={classes["container-header"]}>
      <header>
        {/* {!loginState && (
          <div>
            <h3>ExpenseForm</h3>
          </div>
        )} */}

        <ul>
          <li>
            <NavLink to="/expenseform">Expense</NavLink>
          </li>
          <li>
            <NavLink to="/userpage">User Prfile</NavLink>
          </li>

          <li>{total >= 10000 && <ThemeToggle></ThemeToggle>}</li>

          <li>{total >= 10000 && Premium}</li>
          <li>
            <button onClick={DownloadHandler} className={classes.logout}>
              Download
            </button>
          </li>
          <li>
            <Logout className={classes.logout}></Logout>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
