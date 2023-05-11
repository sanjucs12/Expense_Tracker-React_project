import React, { useRef, useContext } from "react";
import AuthContex from "../../Context/CreateContext";

import classes from "./ContactDetails.module.css";
const ContactDetails = () => {
  const ctx = useContext(AuthContex);
  const enteredName = useRef(null);
  const enteredUrl = useRef(null);

  // form handler function

  const ContactDetailsHandle = (event) => {
    event.preventDefault();
    const obj = {
      idToken: localStorage.getItem("id"),
      displayName: enteredName.current.value,
      photoUrl: enteredUrl.current.value,
      returnSecureToken: true,
    };
    if (obj.displayName !== "" && obj.photoUrl !== " ") {
      console.log("hi");
      ctx.updateUser(obj);
    }
    //console.log("ContactDetailsHandle");
  };
  return (
    <div className={classes["ContactDetails"]}>
      <header className={classes["ContactDetails-header"]}>
        <p>some text</p>
      </header>
      <div className={classes["ContactDetails-from-container"]}>
        <form
          className={classes["ContactDetails-form"]}
          onSubmit={ContactDetailsHandle}
        >
          <h3>Contact Details</h3>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" ref={enteredName}></input>
          <label htmlFor="url"> Enter image URL</label>
          <input type="text" id="imageURL" ref={enteredUrl}></input>
          <button type="submit">update</button>
        </form>
      </div>
    </div>
  );
};
export default ContactDetails;
