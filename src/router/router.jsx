import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddPlant from "../Page/AddPlant/AddPlant";
import MyPlants from "../Page/MyPlants/MyPlants";
import PrivateRouter from "../Context/PrivateRouter/PrivateRouter";
import TableHeaderAllPlants from "../Page/TableHeaderAllPlants/TableHeaderAllPlants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
         index: true,
        path:"/",
        Component: Home,
      },
      {
        path:'/Plant',
        loader:() => fetch('http://localhost:5000/plants'),
        Component:TableHeaderAllPlants,
      }
    ],
  },
    {
    path:'/AddPlants',
    element:<PrivateRouter><AddPlant/></PrivateRouter>
  },
  {
    path:'/MyPlants',
    element:<PrivateRouter><MyPlants/></PrivateRouter>
  },
    {
    path:'/login',
    Component:Login,
  },
  {
    path:'/register',
    Component:Register,
  }
]);
