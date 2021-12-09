import { useFormik } from "formik";
import * as Yup from "yup";

import * as schemas from "./yupSchemas";

export const getInitValues = form => {
  if (form === "singin")
    return {
      email: "",
      password: "",
    };
  else if (form === "singup")
    return {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    };
};

export const useCustomFormik = (formType, submitFunction) => {
  return useFormik({
    initialValues: getInitValues(formType),
    validationSchema: Yup.object(schemas[`${formType}Schema`]),
    onSubmit: values => {
      submitFunction(values);
    },
  });
};
