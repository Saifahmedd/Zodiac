import Login from './Pages/login.jsx'; // Assuming your file is named login.jsx
import './App.css';
import SignUpAsDonor from './Pages/SignUpAsDonor.jsx';
import SignUpAsOrganization from './Pages/SignUpAsOrganization.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './Pages/MapComponent.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUpAsDonor />} />
        <Route path="/Signup1" element={<SignUpAsOrganization />} />
      </Routes>
    </Router>
  );
}

export default App;