import React, { useRef, useState, useContext, useEffect } from "react";
import classes from "./Login.module.css";
import AuthContex from "../../Context/CreateContext";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

const AuthForm = () => {
  const ctx = useContext(AuthContex);
  const [isLogin, setisLogin] = useState(true);
  const [isForgetpassword, setisForgetpassword] = useState(true);
  const enteredEmail = useRef(null);
  const enteredPassword = useRef(null);
  const enteredconfirmPassword = useRef(null);
  useEffect(() => {
    if (ctx.loginState) {
      setisLogin(true);
    }
  }, []);

  const SubmitHandler = (event) => {
    event.preventDefault();

    // const confirmPassword = enteredconfirmPassword.current.value;
    let obj = {
      email: enteredEmail.current.value,
      password: enteredPassword.current.value,
      returnSecureToken: true,
    };

    if (!isLogin) {
      const confirmPassword = enteredconfirmPassword.current.value;
      obj.password === confirmPassword
        ? ctx.signup(obj)
        : console.log("please enter valid password");

      //console.log("succesfully signup", obj);
    }
    if (isLogin && obj.password.length >= 6 && isForgetpassword) {
      //console.log("succesfully sigin", obj);

      ctx.login(obj);
    }
    if (isLogin && !isForgetpassword) {
      //console.log("succesfully sigin", obj);
      //History.push("/loading")
      obj = {
        requestType: "PASSWORD_RESET",
        email: enteredEmail.current.value,
      };

      ctx.forgetPassword(obj);
    }
    setisForgetpassword(true);
  };
  const authChangeHandler = () => {
    setisLogin(!isLogin);
    setisForgetpassword(true);
  };
  const ForgetButtonHandler = () => {
    console.log("ForgetButtonHandlerr");
    setisForgetpassword(!isForgetpassword);
  };

  let submitButton;
  if (isLogin && isForgetpassword) {
    submitButton = "Login";
  }
  if (!isLogin) {
    submitButton = "SignUp";
  }
  if (isLogin && !isForgetpassword) {
    submitButton = "Click to Reset";
  }
  return (
    <React.Fragment>
      <div className={classes["main-container"]}>
        <div className={classes["email-container"]}>
          <h1>{isLogin ? "Login" : "Create Account"}</h1>

          <form className={classes["form-email"]} onSubmit={SubmitHandler}>
            <input
              type="email"
              placeholder="enter your mailid"
              ref={enteredEmail}
            ></input>

            <input
              type="password"
              placeholder="enter your password"
              ref={enteredPassword}
            ></input>

            {!isLogin && (
              <input
                type="password"
                placeholder="confirm password"
                ref={enteredconfirmPassword}
              ></input>
            )}
            <button type="submit">{submitButton}</button>
          </form>
          <button onClick={authChangeHandler} className={classes.toggle}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>

          <ForgetPassword
            name="forget password"
            className={classes.toggle}
            onhandleclick={ForgetButtonHandler}
          ></ForgetPassword>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthForm;
