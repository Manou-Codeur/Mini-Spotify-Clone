import Input from "./../../../Components/input/input";

const SignUp = () => {
  return (
    <div className="signUp">
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Input label="Confirm Password" type="password" />
      <Input label="Profile Name" type="text" />
      <button>SIGN UP</button>
      <div className="signUp__goLogIn">
        Already member? <span>Log In</span>.
      </div>
    </div>
  );
};

export default SignUp;
