import React from "react";
import classes from "./Header.module.css";
import { NavLink, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "../DarktTheme/ThemeToggle";
const Header = () => {
  const total = useSelector((state) => state.expense.TotalAmount);
  const Items = useSelector((state) => state.expense.items);
  // console.log(total);
  // function fileformate(data) {
  //   return data.map((item) => item);
  // }
  const DownloadHandler = () => {
    console.log("DownloadHandler");

    const blob = new Blob([JSON.stringify(Items)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    console.log(link.href);
    // link.download = `${filename}-${+new Date()}.pdf`;
    link.download = "expense.csv";
    link.click();
    console.log(link);
  };
  const PremiumbuttonHandler = () => {
    console.log("PremiumbuttonHandler");
  };
  const Premium = (
    <div className={classes["Premium"]}>
      <button onClick={PremiumbuttonHandler}>Premium</button>
    </div>
  );
  return (
    <div className={classes["container-header"]}>
      <header>
        <ul>
          <li>
            <button onClick={DownloadHandler}>Download</button>
          </li>
          <li>{total >= 10000 && <ThemeToggle></ThemeToggle>}</li>
          <li>logout</li>
          <button></button>
          <li>{total >= 10000 && Premium}</li>
          <li>
            <NavLink to="/userpage">User Prfile</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
