import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../Components/input/input";
import Form from "./../../../Components/form/form";
import { singinSchema } from "./signInSchemas";

const SignIn = ({ history, firebase }) => {
  const { handleSubmit, touched, errors, handleChange, values, handleBlur } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: Yup.object(singinSchema),
      onSubmit: values => handleOnSubmit(values),
    });

  const goToSignUp = () => history.push("/auth/signUp");

  const handleOnSubmit = values => {
    console.log(values);
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
      <button onClick={handleSubmit}>LOG IN</button>
      <div className="signIn__register">
        You are not member yet? <span onClick={goToSignUp}>Register now</span>.
      </div>
    </div>
  );
};

export default Form(SignIn);
