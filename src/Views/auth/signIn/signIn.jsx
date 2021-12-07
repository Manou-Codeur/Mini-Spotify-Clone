import Input from "../../../Components/input/input";

const SignIn = () => {
  return (
    <div className="signIn">
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <span className="signIn__passReset">Forget your password ?</span>
      <button>LOG IN</button>
      <div className="signIn__register">
        You are not member yet? <span>Register now</span>.
      </div>
    </div>
  );
};

export default SignIn;
