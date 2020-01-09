
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import PrivateRoute from './Utils/PrivateRoute';

import FarmerProfile from './Components/FarmerProfile';



import "./App.css";
// import FarmPage from './Components/FarmPage';
import FormikSigninForm from "./Components/FarmerLogin";

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
