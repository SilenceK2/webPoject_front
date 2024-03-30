import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widget/stylecomponents/Layout";
import JoinPage from "../../pages/JoinPage";
import { lazy } from "react";

const LoginPage = lazy(() => import("../../pages/LoginPage"));
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
