import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import axios from "axios";

// const history = useHistory();
// const newFunc = () => {
//   const history = useHistory();
//   history.push("/FarmerProfile");
// }

const WrapperDiv = styled.div`
  background-color: lightblue;
  margin-top: 10%;
`;
const UsernameDiv = styled.div`
  margin-bottom: 3%;
`;

const CustomerLogin = ({ touched, errors }) => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/FarmerProfile");
    }
  }, [localStorage.getItem("token")]);
  return (
    <WrapperDiv>
      <Form>
        <h1>Sign in to account</h1>
        <UsernameDiv>
          <Field type="text" name="username" placeholder="Username" />
        </UsernameDiv>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </div>
        <button type="submit">Sign In</button>
      </Form>
    </WrapperDiv>
  );
};

const FormikCustomerLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    password: Yup.string()
      .min(7, "Password must be 6 characters or longer")
      .max(16, "password is too long ")
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
      .catch(error => console.log("Login catch error: ", error));
  }
})(CustomerLogin);

export default FormikCustomerLogin;
