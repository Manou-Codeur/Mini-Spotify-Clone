import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "./../../../Components/input/input";

import { singupSchema } from "./signUpSchemas";

const SignUp = ({ history, firebase }) => {
  const [registering, setRegistering] = useState(false);

  const { handleSubmit, touched, errors, handleChange, values, handleBlur } =
    useFormik({
      initialValues: { email: "", password: "", confirmPassword: "", name: "" },
      validationSchema: Yup.object(singupSchema),
      onSubmit: values => handleOnSubmit(values),
    });

  const goSignIn = () => history.push("/auth");

  const handleOnSubmit = async ({ email, password, name }) => {
    try {
      setRegistering(true);
      const data = await firebase.doCreateUserWithEmailAndPassword(
        email,
        password
      );
      //store the json web token in the localstorage
      localStorage.setItem(
        "user-authed",
        JSON.stringify(
          data.user.ya.split(".")[0] + "." + data.user.ya.split(".")[1]
        )
      );
      //add the new user to database
      await firebase.addUser({
        uid: data.user.uid,
        name,
        email,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
    setRegistering(false);
  };

  return (
    <div className="signUp">
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
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.confirmPassword}
        errors={errors.confirmPassword}
      />
      <Input
        label="Profile Name"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.name}
        errors={errors.name}
      />
      <button
        onClick={handleSubmit}
        disabled={registering || Object.keys(errors).length > 0}
      >
        {registering ? "SIGNING UP..." : "SIGN UP"}
      </button>
      <div className="signUp__goLogIn">
        Already member? <span onClick={goSignIn}>Log In</span>.
      </div>
    </div>
  );
};

export default SignUp;
