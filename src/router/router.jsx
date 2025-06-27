import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddPlant from "../Page/AddPlant/AddPlant";
import MyPlants from "../Page/MyPlants/MyPlants";
import PrivateRouter from "../Context/PrivateRouter/PrivateRouter";
import TableHeaderAllPlants from "../Page/TableHeaderAllPlants/TableHeaderAllPlants";
import PlantsDetails from "../Page/PlantsDetails/PlantsDetails";
import Error from "../Components/Home/Error/Error";
import UpdatePlant from "../Page/UpdatePlant/UpdatePlant";
import NewPlantDetails from "../Page/SingleNewPlant/NewPlantDetails";
import Profile from "../Page/Profile/Profile";
import GreenNest from "../Components/GreenNest/GreenNest"

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/Plant",
        Component: TableHeaderAllPlants,
      },
      {
        path: "/greenNest",
        Component:GreenNest,
      },
      {
        path:'/profile',
        element:<PrivateRouter>
          <Profile/>
        </PrivateRouter>
      },
      {
        path: "/NewPlants/:id",
        element: (
          <PrivateRouter>
            <NewPlantDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/PlantsDetails/:id",
        element: (
          <PrivateRouter>
            <PlantsDetails />
          </PrivateRouter>
        ),
        loader: () => fetch(`https://mango-server-seven.vercel.app/plants`),
      },

      {
        path: "/updatePlant/:id",
        Component: UpdatePlant,
        loader: ({ params }) =>
          fetch(`https://mango-server-seven.vercel.app/plants/${params.id}`),
      },

      {
        path: "/AddPlants",
        element: (
          <PrivateRouter>
            <AddPlant />
          </PrivateRouter>
        ),
      },
      {
        path: "/MyPlants",
        element: (
          <PrivateRouter>
            <MyPlants />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
