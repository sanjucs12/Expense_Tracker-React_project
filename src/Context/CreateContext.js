import React, { createContext } from "react";

const AuthContex = createContext({
  login: () => {},
  signup: () => {},
});
export default AuthContex;