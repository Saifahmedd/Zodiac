import Root from "./pages/DonorRoot";
import Home from "./pages/DonorHome";
import Clothes from "./pages/DonorClothes";
import Toys from "./pages/DonorToys";
import Food from "./pages/DonorFood";
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


    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
