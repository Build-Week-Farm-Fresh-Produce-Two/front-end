
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import {fetchSupplys} from './actions';
import PrivateRoute from './Utils/PrivateRoute';
import FormikSigninForm from "./Components/FarmerLogin";
import FormikUserForm from "./Components/NewAccountForm";
import FarmerProfile from './Components/FarmerProfile';
import Home from './Components/Home';
import "./App.css";
import Header from './Components/Header';



function App() {
  
  useEffect(() => {
    return (
      fetchSupplys()
    )
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
          <Route path="/Home" component={Home} />
          <Route exact path="/" component={FormikSigninForm} />
          <Route path="/NewAccountForm" component={FormikUserForm}/>
          <PrivateRoute exact path="/FarmerProfile" component={FarmerProfile} />

      </div>
    </Router>
  );
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps, {fetchSupplys})(App);
