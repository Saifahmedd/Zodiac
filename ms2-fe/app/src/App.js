import Root from "./pages/DonorRoot";
import Home from "./pages/DonorHome";
import Clothes from "./pages/DonorClothes";
import Toys from "./pages/DonorToys";
import Food from "./pages/DonorFood";
import SchoolSupplies from "./pages/DonorSchoolSupplies";
import MedicalSupplies from "./pages/DonorMedicalSupplies";
import BloodDonation from "./pages/DonorBloodDonation";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/home" element={<Home />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/toys" element={<Toys />} />
      <Route path="/food" element={<Food />} />
      <Route path="/schoolsupplies" element={<SchoolSupplies />} />
      <Route path="/medicalsupplies" element={<MedicalSupplies />} />
      <Route path="/blooddonation" element={<BloodDonation />} />


    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
