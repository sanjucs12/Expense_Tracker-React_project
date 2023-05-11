import AuthContex from "./CreateContext";
import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const EmailcontextProvider = (props) => {
  const History = useHistory();
  const [loginStates, setloginStates] = useState(false);

  //  LOGIN HANDLER
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
        localStorage.setItem("id", data.idToken);
        //console.log("successfully signIn");
        setloginStates(true);
        // History.replace("/userpage");
        History.replace("/expenseform");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  //SIGNUP HANDLER
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
  //UPDATE USER DETAILS
  const updateUserHandler = async (obj) => {
    try {
      // console.log(obj);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBsbvkR0CzVKbBMzfe0JhJEq-BpJfRc3CA",
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
        console.log("User has successfullyupdated.", data);
        History.push("/userpage");
        alert("User has successfully updated,");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loginStateHandler = () => {
    localStorage.removeItem("id");
    setloginStates(false);
    History.push("/login");
  };

  //FORGET PASSWORD HANDLER FUNCTION

  const forgetPasswordhandler = async (obj) => {
    History.push("/loading");
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBsbvkR0CzVKbBMzfe0JhJEq-BpJfRc3CA",
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
        History.push("/login");
        alert("User has successfully signed up.");
      }
    } catch (error) {
      alert(error.message);
      History.push("/login");
    }
  };
  return (
    <AuthContex.Provider
      value={{
        login: loginHandler,
        signup: signupHandler,
        loginStatefunction: loginStateHandler,
        loginState: loginStates,
        updateUser: updateUserHandler,
        forgetPassword: forgetPasswordhandler,
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
};
export default EmailcontextProvider;
