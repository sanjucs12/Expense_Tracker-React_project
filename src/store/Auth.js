import { createSlice } from "@reduxjs/toolkit";
// import { loginHandler } from "../Api/Api";
const initialAuthstate = {
  isLogin: true,
  isForgetpassword: false,
  logid: null,
  isSignup: false,
  loginState: false,
  loginToken: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthstate,
  reducers: {
    setisLogin(state) {
      state.isLogin = !state.isLogin;
      state.isForgetpassword = false;
    },
    setisForgetpassword(state) {
      state.isForgetpassword = !state.isForgetpassword;
      state.isLogin = false;
      // state.isSignup = false;
    },

    loginid(state, action) {
      // state.logid = action.payload;
      console.log(action.payload);
    },
    setLoginsate(state, action) {
      state.loginState = !state.loginState;
      state.loginToken = action.payload;
    },
  },
});

export const AuthSliceAction = AuthSlice.actions;
export default AuthSlice;
