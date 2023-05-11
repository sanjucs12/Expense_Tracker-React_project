import React, { useContext } from "react";
// import EmailcontextProvider from "./Context/emailContextprovider";
import AuthForm from "./components/Login/Login";
import AuthContex from "./Context/CreateContext";
import Dummy from "./components/Dummy";

function App() {
  const ctx = useContext(AuthContex);
  return (
    <React.Fragment>
      {ctx.loginState && <Dummy></Dummy>}
      {!ctx.loginState && <AuthForm></AuthForm>}
    </React.Fragment>
  );
}

export default App;
