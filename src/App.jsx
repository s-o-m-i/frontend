import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout";
import UploadMovie from "./pages/UploadMovie/UploadMovie";
import Layout from "./components/Layout";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/logout",
        element: <Logout/>,
      },
      {
        path: "/uploadMovie",
        element: <UploadMovie/>,
      },
    ]
  },
 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
