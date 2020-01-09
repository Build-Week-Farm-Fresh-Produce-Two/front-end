import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

// const history = useHistory();
  // const newFunc = () => {
  //   const history = useHistory();
  //   history.push("/FarmerProfile");
  // }

const SigninForm = ({touched, errors}) => {
  let history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')){
      history.push('/FarmerProfile');
    }
  }, [localStorage.getItem('token')])
  return (
    <Form>
      <div>
        <Field type="text" name="username" placeholder="Username" />
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && 
                <p className="errors">{errors.password}</p>
            }
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
    password: Yup.string()
      .min(7, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submiting", values);
    axios
      .post("https://bestfarm.herokuapp.com/api/auth/login", values)
      .then(response => {
        console.log("success", response.data);
        setStatus(response.data);
        localStorage.setItem("token", response.data.token);
        resetForm();
      })
      .catch(error => 
        console.log('Login catch error: ', error));
  }
})(SigninForm);

  


export default FormikSigninForm;
