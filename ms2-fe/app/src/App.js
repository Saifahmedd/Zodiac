import Home from "./OrgHome";
import Root from "./Root";
import Post from "./Post";
import AccountInfo from "./AccountInfo";
import OrgPosts from "./OrgPosts";
import DonatedPosts from "./DonatedPosts";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<Home />} />
      <Route path="post" element={<Post />} />
      <Route path="account" element={<AccountInfo />} />
      <Route path="OrgPosts" element={<OrgPosts/>} />
      <Route path="DonatedPosts" element={<DonatedPosts/>} />
      
      {/* ... etc. */}
    </Route>
  )
);
function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
