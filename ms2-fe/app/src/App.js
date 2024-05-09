import Login from './Pages/login.jsx'; // Assuming your file is named login.jsx
import './App.css';
import SignUpAsDonor from './Pages/SignUpAsDonor.jsx';
import Organization from './Pages/Organization.jsx';
 

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />}>
      <Route path="/Signup" element={<SignUpAsDonor />} />
      <Route path="/Signup1" element={<Organization />} />

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;