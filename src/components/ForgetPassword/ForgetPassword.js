const ForgetPassword = (props) => {
  const ForgetPasswordHandler = () => {
    props.onhandleclick();

    console.log("ForgetPasswordHandler page");
  };
  return (
    <div>
      <button onClick={ForgetPasswordHandler} className={props.className}>
        {props.name}
      </button>
    </div>
  );
};
export default ForgetPassword;
