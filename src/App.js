import React from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container 
    justify-center ml-auto mr-auto">
      <div>
        <NavBar />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
