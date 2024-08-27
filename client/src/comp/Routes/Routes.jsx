import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import { createBrowserRouter } from "react-router-dom";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default Routes;
