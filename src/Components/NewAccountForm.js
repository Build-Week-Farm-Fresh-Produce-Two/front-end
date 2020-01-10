import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const Forms = ({ values, errors, touched, status, valid }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    status && setUser(user => [...user, status])
  }, [status])

  return (
    <>
    <Form className="signup">
      <div className="signup-img">
          <img width="50%" src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="crop field"/>
      </div>
      <div className="form">
        <h1>Create New Account</h1>
      <label htmlFor='farmid'>
          <Field className="input" type='text' name='farmID' placeholder='Farm ID' />
        </label>
        <label htmlFor='name'>
          <Field className="input" type='text' name='name' placeholder='First Name' valid={touched.name && !errors.name} />
        </label>
        {touched.name && errors.name && (<p className='errors'>{errors.name}</p>)}

        <label htmlFor='username'>
          <Field className="input" type='text' name='username' placeholder='Username' valid={touched.username && !errors.username} />
        </label>
        {touched.username && errors.username && (<p className='errors'>{errors.username}</p>)}

        <label htmlFor='email'>
          <Field className="input" type='email' name='email' placeholder='Email' />
        </label>
        {touched.email && errors.email && (<p className='errors'>{errors.email}</p>)}

        <label htmlFor='password'>
          <Field className="input" type='text' name='password' placeholder='Password' />
        </label>
        {touched.password && errors.password && (<p className='errors'>{errors.password}</p>)}

        <label htmlFor='zipcode'>
          <Field className="input" type='text' name='zipCode' placeholder='ZipCode' />
        </label>

        <label>Are You a Farmer?
          <Field className="checkbox" type='checkbox' name='tos' checked={values.tos} />
        </label>
        {touched.tos && errors.tos && (<p className='errors'>{errors.tos}</p>)}

        <button type='submit'>Submit!</button>
      </div>
      </Form>
      {user.map(newUser => (
        <ul key={newUser.id}>
          <li>Farm ID: {newUser.farmID}</li>
          <li>First Name: {newUser.name}</li>
          <li>UserName: {newUser.username}</li>
          <li>Email: {newUser.email}</li>
          <li>Password: {newUser.password}</li>
          <li>ZipCode: {newUser.zipCode}</li>
        </ul>
      ))}
    </>
  )
}
const FormikUserForm = withFormik({
  mapPropsToValues({ name, username, email, password, tos }) {
    return {
      name: name || '',
      username: username || '',
      email: email || '',
      password: password || '',
      tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('FiName is a required field!')
      .min(2, 'Too Short! Must be at least 2 characters'),
    username: Yup.string()
      .required('Name is a required field!')
      .min(2, 'Too Short! Must be at least 2 characters'),
    email: Yup.string()
      .required('Email is a required field!')
      .email('Please enter a valid email address'),
    password: Yup.string()
      .required('Password is a required field!')
      .min(8, 'Too Short! Must be at least 8 characters'),
    // tos: Yup.bool()
    //   .oneOf([true], 'Terms of Service is a required field!')
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios.post('', values)
      .then(response => {
        setStatus(response.data);
        console.log(response)
        resetForm()
      })
      .catch(error => console.log(error.response))
  }
})(Forms);

export default FormikUserForm;