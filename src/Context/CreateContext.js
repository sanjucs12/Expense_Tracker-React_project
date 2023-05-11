import { createContext } from "react";

const AuthContex = createContext({
  login: () => {},
  signup: () => {},
  loginState: false,
  loginStatefunction: () => {},
  updateUser: () => {},
});
export default AuthContex;
