import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/DonorHome";
import Clothes from "./pages/DonorClothes";
import Toys from "./pages/DonorToys";
import Food from "./pages/DonorFood";
import SchoolSupplies from "./pages/DonorSchoolSupplies";
import MedicalSupplies from "./pages/DonorMedicalSupplies";
import BloodDonation from "./pages/DonorBloodDonation";
import Teaching from "./pages/DonorTeaching";
import MedicalCases from "./pages/DonorMedicalCases";
import ViewOrg from "./pages/DonorViewOrg";
import TrackingOrder from "./pages/DonorTrackingOrder";
import Profile from "./pages/DonorProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/food" element={<Food />} />
        <Route path="/schoolsupplies" element={<SchoolSupplies />} />
        <Route path="/medicalsupplies" element={<MedicalSupplies />} />
        <Route path="/blooddonation" element={<BloodDonation />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/medicalcases" element={<MedicalCases />} />
        <Route path="/viewOrg" element={<ViewOrg />} />
        <Route path="/trackingorder" element={<TrackingOrder />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
