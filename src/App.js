import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserPage from "./components/Login/UserPage";
import AuthForm from "./components/Login/Login";
import ContactDetails from "./components/Login/ContactDetails";
import LoadingSpinner from "./components/Loadingspinner/LoadingSpinner";
import ExpenseForm from "./components/Expense/ExpenseForm";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import { AuthSliceAction } from "./store/Auth";
import "./App.css";
function App() {
  const Dispatch = useDispatch();

  const dark = useSelector((state) => state.expense.darkmode);

  const loginState = useSelector((state) => state.auth.loginState);
  useEffect(() => {
    if (localStorage.getItem("islogin") === "true") {
      console.log("hi");
      Dispatch(AuthSliceAction.setLoginsate());
    }
  }, []);
  // const loginState = localStorage.getItem("islogin") === "true";
  console.log(dark);
  return (
    <div className={dark || !loginState ? "light" : ""}>
      {loginState && <Header></Header>}
      {console.log("app rendeing")}
      {!loginState ? (
        <Route path="/login">
          <AuthForm></AuthForm>
        </Route>
      ) : (
        <Switch>
          <Route path="/contactdetails">
            <ContactDetails></ContactDetails>
          </Route>

          <Route path="/userpage" exact>
            <UserPage></UserPage>
          </Route>
          <Route path="/loading">
            <LoadingSpinner></LoadingSpinner>
          </Route>
          <Route path="/expenseform" exact>
            <ExpenseForm></ExpenseForm>
          </Route>
          <Route path="/login" exact>
            <AuthForm></AuthForm>
          </Route>

          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
      {!loginState && <Redirect to="/login" />}
      {loginState && <Redirect to="/expenseform" />}
    </div>
  );
}

export default App;
