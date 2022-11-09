import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import UV from "./components/UV";
import Footer from "./components/Footer";
import UVDating from "./components/UVDating";

function App() {
  return (
    <div className="">
      <div
        className="container 
    justify-center ml-auto mr-auto"
      >
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* UV */}
          <Route path="/uv" element={<UV />} />
          <Route path="/uv-dating" element={<UVDating />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
