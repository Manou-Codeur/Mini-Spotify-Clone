import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../Components/input/input";
import { singinSchema } from "./signInSchemas";
import { handleErrors } from "./../../../Services/firebase/errorHandling";

const SignIn = ({ history, firebase }) => {
  const [logging, setLogging] = useState(false);
  const [globalErrors, setGlobalErrors] = useState(null);

  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    values,
    handleBlur,
    setErrors,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object(singinSchema),
    onSubmit: values => handleOnSubmit(values),
  });

  const goToSignUp = () => history.push("/auth/signUp");

  const handleOnSubmit = async ({ email, password }) => {
    setGlobalErrors(null);
    setLogging(true);
    try {
      const data = await firebase.doSignInWithEmailAndPassword(email, password);
      //store the json web token in the localstorage
      localStorage.setItem(
        "user-authed",
        JSON.stringify(
          data.user.ya.split(".")[0] + "." + data.user.ya.split(".")[1]
        )
      );
      history.push("/");
    } catch (error) {
      handleErrors("singin", error, setErrors, setGlobalErrors);
    }
    setLogging(false);
  };

  return (
    <div className="signIn">
      <Input
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.email}
        errors={errors.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.password}
        errors={errors.password}
      />
      <span className="signIn__passReset">Forget your password ?</span>
      <button
        onClick={handleSubmit}
        disabled={logging || Object.keys(errors).length > 0}
      >
        {logging ? "LOGGING..." : "LOGIN"}
      </button>
      {globalErrors && <div style={{ color: "red" }}>{globalErrors}</div>}
      <div className="signIn__register">
        You are not member yet? <span onClick={goToSignUp}>Register now</span>.
      </div>
    </div>
  );
};

export default SignIn;
