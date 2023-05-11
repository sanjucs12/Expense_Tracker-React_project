import { createContext } from "react";

const AuthContex = createContext({
  login: () => {},
  signup: () => {},
  loginState: false,
  updateUser: () => {},
});
export default AuthContex;
