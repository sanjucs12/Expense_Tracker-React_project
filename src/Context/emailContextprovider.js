import AuthContex from "./CreateContext";
import React, { useState } from "react";
const EmailcontextProvider = (props) => {
  const [loginStates, setloginStates] = useState(false);
  const loginHandler = async (obj) => {
    console.log("loginHandler", obj);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHfDdJCB5KGcrwcnmpsK7V5Q8haFmqDGM",
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
        // console.log(data.idToken);
        console.log("successfully signIn");
        setloginStates(true);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const signupHandler = async (obj) => {
    //console.log("signupHandler", item);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHfDdJCB5KGcrwcnmpsK7V5Q8haFmqDGM",
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
        //console.log(data.idToken);
        // console.log("User has successfully signed up.");
        alert("User has successfully signed up.");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <AuthContex.Provider
      value={{
        login: loginHandler,
        signup: signupHandler,
        loginState: loginStates,
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
};
export default EmailcontextProvider;
