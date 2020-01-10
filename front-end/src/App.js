import React from "react";
import sytled from "styled-components";
import "./App.css";
import FarmPage from "./Components/FarmPage";
import FormikSigninForm from "./Components/FarmerLogin";

function App() {
  return (
    <div className="App">
      <FormikSigninForm />
    </div>
  );
}

export default App;
