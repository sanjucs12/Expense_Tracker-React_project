import React from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.LoadingSpinnercontainer}>
      <div className={classes.container}>
        <div className={classes["load-container"]}>
          <div className={classes["linespinner"]}></div>
        </div>
        <h3>Loading.........</h3>
      </div>
    </div>
  );
};
export default LoadingSpinner;
