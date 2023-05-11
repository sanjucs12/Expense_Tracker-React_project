import React, { createContext } from "react";

const AuthContex = createContext({
  login: () => {},
  signup: () => {},
  loginState: false,
});
export default AuthContex;
