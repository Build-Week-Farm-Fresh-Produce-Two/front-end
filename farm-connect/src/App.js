import React from "react";
import logo from "./logo.svg";
import { Router } from "react-router-dom";
import SinginForm from "./Components/SigninForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sign in to account</h1>
      <SinginForm />
    </div>
  );
}
export default App;
