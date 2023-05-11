import React from "react";
import EmailcontextProvider from "./Context/emailContextprovider";
import AuthForm from "./components/Login/Login";
function App() {
  return (
    <EmailcontextProvider>
      <AuthForm></AuthForm>
    </EmailcontextProvider>
  );
}

export default App;
