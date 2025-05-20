import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import PlantDetails from "../Components/PlantsCard/PlantDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        hydrateFallbackElement:(
          <div className="text-center">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        ),
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/Data.json"),
      },

      {
        path:'/details/:id',
        Component:PlantDetails
      }
    ],
  },
]);
