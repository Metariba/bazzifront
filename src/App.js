import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Spinner } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import "./App.css";
import Landing from "./pages/Landing/index.js";
import LoginAdmin from "./pages/loginAdmin";
import LoginEmployee from "./pages/loginEmployee";
import NewStudent from "./pages/NewStudent";
import AdminViewStudents from "./pages/AdminViewStudents";
import Attandence from "./pages/Attandence";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/loginAdmin" element={<LoginAdmin />} />
        <Route exact path="/loginEmploye" element={<LoginEmployee />} />
        <Route exact path="/newStudent" element={<NewStudent />} />
        <Route exact path="/viewStudents" element={<AdminViewStudents />} />
        <Route exact path="/attandence" element={<Attandence />} />

        {/* <Route path="/404" element={<div>page not found</div>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
