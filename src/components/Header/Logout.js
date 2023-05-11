import classes from "./Logout.module.css";
import { useDispatch } from "react-redux";
import { AuthSliceAction } from "../../store/Auth";
import { useHistory } from "react-router-dom";
const Logout = () => {
  const History = useHistory();
  const Dispatch = useDispatch();

  const logoutHandler = () => {
    Dispatch(AuthSliceAction.setLoginsate(null));
    localStorage.clear();
    History.push("/login");
    console.log("logoutHandler");
  };
  return (
    <div>
      <button onClick={logoutHandler} className={classes["logout"]}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
