import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SigninForm = ({ props, errors, status }) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   status && setUsers([...users, status]);
  //   if (status !== undefined) {
  //     props.history.push("/FarmProfile");
  //   }
  //   console.log(users);
  //   if (localStorage.getItem("token")) {
  //     return <Redirect to="/FarmProfile" />;
  //   }
  // }, [status]);

  return (
    <Form>
      <div>
        {errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="UserName" />
      </div>
      <div>
        {errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button type="submit">Sign In</button>
    </Form>
  );
};

const FormikSigninForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    // username: Yup.string()
    //   .username("Username not valid")
    //   .required("Username is required"),
    password: Yup.string()
      .min(7, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submiting", values);
    axios
      .post("https://bestfarm.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        localStorage.setItem("token", res.data.payload);
        // console.log("This is props", props);
        // this.props.history.push("/profile");

        resetForm();
      })
      .catch(err => console.log("Login catch error", err));
  }
})(SigninForm);

export default FormikSigninForm;
