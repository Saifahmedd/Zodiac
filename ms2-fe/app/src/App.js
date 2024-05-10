import AdminHome from "./pages/AdminHome";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AdminManage from "pages/AdminManage";
import AdminDelete from "pages/AdminDelete";
import AdminSearch from "pages/AdminSearch";
import AdminPassword from "pages/AdminPassword";
import AdminView from "pages/AdminView";
import AdminProfile from "pages/AdminProfile";
import AdminDelete2 from "pages/AdminDelete2";
import AdminManage2 from "pages/AdminManage2";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AdminHome />}>
      <Route path="manage" element={<AdminManage />}></Route>
      <Route path="delete" element={<AdminDelete />}></Route>
      <Route path="search" element={<AdminSearch />}></Route>
      <Route path="changepassword" element={<AdminPassword />}></Route>
      <Route path="view" element={<AdminView />}></Route>
      <Route path="profile" element={<AdminProfile />}></Route>
      <Route path="donordelete" element={<AdminDelete2 />}></Route>
      <Route path="donormanage" element={<AdminManage2 />}></Route>
      
      
    
    </Route>
  )
);


function App() {
  return (
    
       <RouterProvider router={router} />
      
    
  );
}

export default App;
