// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/Signup.jsx"
import Login from "./component/Login.jsx";
import Home from "./pages/Home.jsx"; // ✅ make sure this path is correct

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />        {/* ✅ Add this line */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
