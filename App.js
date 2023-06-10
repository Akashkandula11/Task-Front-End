import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login"
import { Register } from " ./Register";

function App(){
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "lsogin" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );

}

export default App;
