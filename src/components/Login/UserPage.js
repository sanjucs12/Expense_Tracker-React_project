import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserPage.module.css";

const UserPage = () => {
  const emailverifyHandler = async () => {
    const obj = {
      idToken: localStorage.getItem("id"),
      requestType: "VERIFY_EMAIL",
    };
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBHfDdJCB5KGcrwcnmpsK7V5Q8haFmqDGM",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      } else {
        console.log("please check your inbox to verify", data);
        alert("please check your inbox to verify");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={classes.userpage}>
      <header className={classes.userheader}>
        <p>welcome to expense tracker</p>
        <div className={classes["button-container"]}>
          <p>your profile is incomplete </p>
          <button>{<Link to="contactdetails">Complete Now</Link>}</button>
        </div>
      </header>
      <div className={classes["verify-container"]}>
        <img
          src=" https://www.pngkey.com/png/detail/52-523516_empty-profile-picture-circle.png"
          alt="profile"
        ></img>
        <button onClick={emailverifyHandler}>verify mail Id</button>
      </div>
    </div>
  );
};

export default UserPage;
