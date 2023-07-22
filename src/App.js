import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Singup from "./pages/Singup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)

  return ( 
   
      <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="/login"  element={<Login setIsLoggedIn={setIsLoggedIn}  />} />
          <Route path="/singup"  element={<Singup  setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={<Dashboard /> }/>
        </Routes>
      </div>
  
  );
};

export default App;
