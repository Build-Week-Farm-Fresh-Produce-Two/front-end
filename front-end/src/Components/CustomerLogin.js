import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import styled from "styled-components";
import axios from "axios";

const CustomerLogin = ({ props, errors, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers([...users, status]);
    if (status !== undefined) {
      props.history.push("/CustomerProfile");
    }
    console.log(users);
    if (localStorage.getItem("token")) {
      return <Redirect to="/CustomerProfile" />;
    }
  }, [status]);

  return (
    <Form>
      <div>
        {errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email Address" />
      </div>
      <div>
        {errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button type="submit">Sign In</button>
    </Form>
  );
};

const FormikCustomerLogin = withFormik({
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
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submiting", values);
    axios
      .post("https://bestfarm.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        localStorage.setItem("user-token", res.data.token);
        resetForm();
      })
      .catch(err => console.log("Login catch error", err));
  }
})(CustomerLogin);

export default FormikCustomerLogin;
