import React from 'react';


import './App.css';
import FarmPage from './Components/FarmPage';
import FormikSigninForm from './Components/FarmerLogin';


function App() {
  return (
    <div className="App">
      <FormikSigninForm/>
      <FarmPage/>
    </div>
  );
}

export default App;
