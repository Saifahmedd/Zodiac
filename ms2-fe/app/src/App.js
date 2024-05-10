import Login from './Pages/login.jsx'; // Assuming your file is named login.jsx
import './App.css';
import SignUpAsDonor from './Pages/SignUpAsDonor.jsx';
import SignUpAsOrganization from './Pages/SignUpAsOrganization.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OrgLogin from './Pages/OrgLogin'; 

import DonorLogin1 from './Pages/DonorLogin1.jsx';
import AdminLogin1 from './Pages/AdminLogin1.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUpAsDonor />} />
        <Route path="/Signup1" element={<SignUpAsOrganization />} />
        <Route path="/OrgLogin" element={<OrgLogin />} />
        <Route path="/DonorLogin" element={<DonorLogin1 />} />
        <Route path="/AdminLogin" element={<AdminLogin1 />} />

       
      </Routes>
      
    </Router>
  );
}

export default App;