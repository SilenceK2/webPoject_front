import { createBrowserRouter } from "react-router-dom";

import Layout from "../../style/stylecomponents/Layout/Layout";
import JoinPage from "../../pages/Login/JoinPage";
import { lazy } from "react";
const LoginPage = lazy(() => import("../../pages/Login/LoginPage"));
const HomePage = lazy(() => import("../../pages/Home"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [{ path: "/home", element: <HomePage /> }],
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/join",
        element: <JoinPage />,
      },
    ],
  },
]);

export default router;
