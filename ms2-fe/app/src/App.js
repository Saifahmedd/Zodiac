import AdminHome from "./AdminPages/AdminHome";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminManage from "AdminPages/AdminManage";
import AdminDelete from "AdminPages/AdminDelete";
import AdminSearch from "AdminPages/AdminSearch";
import AdminPassword from "AdminPages/AdminPassword";
import AdminView from "AdminPages/AdminView";
import AdminProfile from "AdminPages/AdminProfile";
import AdminDelete2 from "AdminPages/AdminDelete2";
import AdminManage2 from "AdminPages/AdminManage2";
import AdminView2 from "AdminPages/AdminView2";







function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminHome />}/>
        <Route path="manage" element={<AdminManage />}/>
        <Route path="delete" element={<AdminDelete />}/>
        <Route path="search" element={<AdminSearch />}/>
        <Route path="changepassword" element={<AdminPassword />}/>
        <Route path="view" element={<AdminView />}/>
        <Route path="profile" element={<AdminProfile />}/>
        <Route path="donordelete" element={<AdminDelete2 />}/>
        <Route path="donormanage" element={<AdminManage2 />}/>
        <Route path="donorview" element={<AdminView2 />}/>
      
      </Routes>
    </Router>
       
      
    
  );
}

export default App;
