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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
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
        path: "/phoneDetails",
        Component: phoneDetails,
      },
    ],
  },
]);
