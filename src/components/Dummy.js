import React from "react";

const Dummy = () => {
  const complateHandler = () => {
    console.log("completeHandler");
  };
  return (
    <div className="dummy">
      <header>
        <p>welcome to expense tracker</p>
        <div>
          <p>your profile is incomplete </p>
          <button onClick={complateHandler}>complete now</button>
        </div>
      </header>
    </div>
  );
};

export default Dummy;
