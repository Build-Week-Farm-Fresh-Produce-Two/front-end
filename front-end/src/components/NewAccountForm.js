import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { MainForm, Input, CheckContainer, InputForm } from './Theme.js';

const Forms = ({ values, errors, touched, status, valid }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status])
  }, [status])

  return (
    <>
      <Form>
        <label htmlFor='fname'>
          <Field type='text' name='fname' placeholder='First Name' valid={touched.name && !errors.name} />
        </label>
        {touched.fname && errors.fname && (<p className='errors'>{errors.fname}</p>)}

        <label htmlFor='lname'>
          <Field type='text' name='lname' placeholder='Last Name' valid={touched.name && !errors.name} />
        </label>
        {touched.lname && errors.lname && (<p className='errors'>{errors.lname}</p>)}

        <label htmlFor='email'>
          <Field type='email' name='email' placeholder='Email' />
        </label>
        {touched.email && errors.email && (<p className='errors'>{errors.email}</p>)}

        <label htmlFor='password'>
          <Field type='text' name='password' placeholder='Password' />
        </label>
        {touched.password && errors.password && (<p className='errors'>{errors.password}</p>)}

        <label>Agree to Terms
          <Field type='checkbox' name='tos' checked={values.tos} />
        </label>
        {touched.tos && errors.tos && (<p className='errors'>{errors.tos}</p>)}

        <button type='submit'>Submit!</button>
      </Form>
      {user.map(newUser => (
        <ul key={newUser.id}>
          <li>First Name: {newUser.fname}</li>
          <li>Last Name: {newUser.lname}</li>
          <li>Email: {newUser.email}</li>
          <li>Password: {newUser.password}</li>
        </ul>
      ))}
    </>
  )
}
const FormikUserForm = withFormik({
  mapPropsToValues({ fname, lname, email, password, tos }) {
    return {
      fname: fname || '',
      lname: lname || '',
      email: email || '',
      password: password || '',
      tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    fname: Yup.string()
      .required('FiName is a required field!')
      .min(2, 'Too Short! Must be at least 2 characters'),
    lname: Yup.string()
      .required('Name is a required field!')
      .min(2, 'Too Short! Must be at least 2 characters'),
    email: Yup.string()
      .required('Email is a required field!')
      .email('Please enter a valid email address'),
    password: Yup.string()
      .required('Password is a required field!')
      .min(8, 'Too Short! Must be at least 8 characters'),
    tos: Yup.bool()
      .oneOf([true], 'Terms of Service is a required field!')
  }),
  handleSubmit(values, { setStatus }) {
    axios.post('https://reqres.in/api/users', values)
      .then(response => {
        setStatus(response.data);
        console.log(response)
      })
      .catch(error => console.log(error.response))
  }
})(Forms);

export default FormikUserForm;