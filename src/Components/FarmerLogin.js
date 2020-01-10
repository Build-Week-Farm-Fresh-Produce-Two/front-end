
import React from "react";
// import { useHistory } from "react-router-dom";
// import {Redirect} from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";



const SigninForm = ({touched, errors}) => {

  return (
    <Form className="signup">
        <div className="signup-img">
            <img width="50%" src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="crop field"/>
        </div>
      <div className="form1">
      <h1>Login</h1>
        <Field className="input" type="text" name="username" placeholder="Username" />
        <Field className="input" type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && 
                <p className="errors">{errors.password}</p>
            }
      <button type="submit">Sign In</button>
      </div>
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

    password: Yup.string()
      .min(7, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus, resetForm, props}) {
    console.log("submiting", values);
    axios
      .post("https://bestfarm.herokuapp.com/api/auth/login", values)
      .then(response => {
        console.log("success", response.data);
        setStatus(response.data);
        localStorage.setItem("token", response.data.token);
        resetForm()
        props.history.push('/FarmerProfile')
      })
      .catch(error => 
        console.log('Login catch error: ', error));
  }
})(SigninForm);

  


export default FormikSigninForm;
