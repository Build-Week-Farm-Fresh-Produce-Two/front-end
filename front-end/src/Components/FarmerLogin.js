import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SigninForm = ({ errors, touched }) => {
  return (
    <Form>
      <div>
        {touched.email && error.email && <p>{error.emial}</p>}
        <Field type="email" name="email" placeholder="Email Address" />
      </div>
      <div>
        {touched.password && error.password && <p>{error.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button>Sign In</button>
    </Form>
  );
};

const FormikSigninForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submiting", values);
    axios
      .post("", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.res));
  }
})(SigninForm);

export default FormikSigninForm;
