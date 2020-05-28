import React from "react"; //useState retorna um vetor com 2 vlrs
import "./App.css";

import logo from "./assets/logo.svg";

import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnc"></img>
      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
