import AuthContex from "./CreateContext";
import React from "react";
const EmailcontextProvider = (props) => {
  const loginHandler = async (obj) => {
    console.log("loginHandler", obj);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsbvkR0CzVKbBMzfe0JhJEq-BpJfRc3CA",
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
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const signupHandler = async (obj) => {
    //console.log("signupHandler", item);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsbvkR0CzVKbBMzfe0JhJEq-BpJfRc3CA",
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
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
};
export default EmailcontextProvider;
