
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from 'react'
import './App.css';

import PrivateRoute from './Utils/PrivateRoute';
import FormikSigninForm from "./Components/FarmerLogin";
import FarmerProfile from './Components/FarmerProfile';



import "./App.css";



function App() {
  
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FormikSigninForm} />
          <PrivateRoute exact path="/FarmerProfile" component={FarmerProfile} />
        </Switch>
      </div>
    </Router>
    


  );
}

export default App;
