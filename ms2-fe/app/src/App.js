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
import DonorRoot2 from "./pages/DonorRoot2";
import DonorHome2 from "./pages/DonorHomeTech";
import DonorHome3 from "./pages/DonorHome3";
import DonorRoot3 from "./pages/DonorRoot3.jsx"


import AdminHome from "./AdminPages/AdminHome";
import AdminManage from "./AdminPages/AdminManage";
import AdminDelete from "./AdminPages/AdminDelete";
import AdminSearch from "./AdminPages/AdminSearch";
import AdminPassword from "./AdminPages/AdminPassword";
import AdminView from "./AdminPages/AdminView";
import AdminProfile from "./AdminPages/AdminProfile";
import AdminDelete2 from "./AdminPages/AdminDelete2";
import AdminManage2 from "./AdminPages/AdminManage2";
import AdminView2 from "./AdminPages/AdminView2";

import SignUpAsDonor from './LoginPages/SignUpAsDonor.jsx';
import SignUpAsOrganization from './LoginPages/SignUpAsOrganization.jsx';
import GetStartedPage from './LoginPages/GetStartedPage.js';
import Login from './LoginPages/login.jsx';


import Root from './OrgPages/Root';
import Post from './OrgPages/Post';
import AccountInfo from './OrgPages/AccountInfo';
import OrgPosts from './OrgPages/OrgPosts';
import DonatedPosts from './OrgPages/DonatedPosts';
import OrgHome from './OrgPages/OrgHome';

function App() {
  return (
    <Router>
      <Routes>
        {/*Registration & Login*/}
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUpAsDonor />} />
        <Route path="/Signup1" element={<SignUpAsOrganization />} />

        {/* Admin */}
        <Route path="/adminHome" element={<AdminHome />}/>
        <Route path="/manage" element={<AdminManage />}/>
        <Route path="delete" element={<AdminDelete />}/>
        <Route path="search" element={<AdminSearch />}/>
        <Route path="changepassword" element={<AdminPassword />}/>
        <Route path="view" element={<AdminView />}/>
        <Route path="adminProfile" element={<AdminProfile />}/>
        <Route path="donordelete" element={<AdminDelete2 />}/>
        <Route path="donormanage" element={<AdminManage2 />}/>
        <Route path="donorview" element={<AdminView2 />}/>

        {/* Donor */}
        <Route path='/home' element={<Home />} />
        <Route path='/root2' element={<DonorRoot2 />} />
        <Route path='/home2' element={< DonorHome2/>} />
        <Route path='/root3' element={< DonorRoot3/>} />
        <Route path='/home3' element={< DonorHome3/>} />
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

        {/* Organization */}
        <Route path="post" element={<Post />} />
        <Route path="account" element={<AccountInfo />} />
        <Route path="OrgPosts" element={<OrgPosts/>} />
        <Route path="DonatedPosts" element={<DonatedPosts/>} />
        <Route path="/OrgHome" element={<OrgHome/>} />

      </Routes>
    </Router>
  );
}

export default App;
