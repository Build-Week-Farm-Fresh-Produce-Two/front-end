
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from 'react-redux'; 
import './App.css';
import {fetchSupplys} from './actions';
import PrivateRoute from './Utils/PrivateRoute';
import FormikSigninForm from "./Components/FarmerLogin";
import FarmerProfile from './Components/FarmerProfile';



import "./App.css";



function App(props) {
  
  useEffect(() => {
    props.fetchSupplys()
  }, [])
  return (
    <Router>
      <div className="App">

        
          <Route exact path="/login" component={FormikSigninForm} />
          <PrivateRoute exact path="/FarmerProfile" component={FarmerProfile} />

      </div>
    </Router>
  );
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, {fetchSupplys})(App);
