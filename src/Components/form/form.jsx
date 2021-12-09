import { Component, useState } from "react";
import { getInitValues, useCustomFormik } from "./helperFunctions";

const Form = (Comp, formType) =>
  class extends Component {
    //Handle the auth logic and the validation

    render() {
      return <Comp {...this.props} />;
    }
  };

export default Form;
