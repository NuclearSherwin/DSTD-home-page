import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="container 
    justify-center ml-auto mr-auto">
      <div>
        <NavBar />
      </div>

      <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/login" element={<Login />} /> 
      </Routes>
    </div>

   
  );
}

export default App;
