import { createBrowserRouter } from "react-router";

import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";

import Favorites from "../pages/Favorites";
import phoneDetails from "../pages/phoneDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    hydrateFallbackElement: <p>Loading Please Wait</p>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,

        loader: () => fetch("../phones.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/phoneDetails/:id",
        Component: phoneDetails,
        loader: () => fetch("../phones.json"),
      },
    ],
  },
]);
