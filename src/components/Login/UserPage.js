import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserPage.module.css";

const UserPage = () => {
  return (
    <div className={classes.userpage}>
      <header className={classes.userheader}>
        <p>welcome to expense tracker</p>
        <div className={classes["button-container"]}>
          <p>your profile is incomplete </p>
          <button>{<Link to="contactdetails">Complete Now</Link>}</button>
        </div>
      </header>
    </div>
  );
};

export default UserPage;
