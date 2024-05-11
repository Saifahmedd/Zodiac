import AdminHome from "./pages/AdminHome";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminManage from "pages/AdminManage";
import AdminDelete from "pages/AdminDelete";
import AdminSearch from "pages/AdminSearch";
import AdminPassword from "pages/AdminPassword";
import AdminView from "pages/AdminView";
import AdminProfile from "pages/AdminProfile";
import AdminDelete2 from "pages/AdminDelete2";
import AdminManage2 from "pages/AdminManage2";







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
      
      </Routes>
    </Router>
       
      
    
  );
}

export default App;
