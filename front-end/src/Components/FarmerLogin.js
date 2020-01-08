import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SigninForm = ({ props, error, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers([...users, status]);
    if (status !== undefined) {
      props.history.push("/FarmPage");
    }
    console.log(users)
    if (localStorage.getItem("token")) {
      return <Redirect to="/FarmPage" />;
    }
  }, [status])

  return (
    <Form>
      <div>
        {touched.email && error.email && <p>{error.email}</p>}
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
      .post("https://bestfarm.herokuapp.com/api/users/login", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        localStorage.setItem("user-token", res.data.token);
        resetForm();
      })
      .catch(err => console.log(err.res));
  }
})(SigninForm);

export default FormikSigninForm;
