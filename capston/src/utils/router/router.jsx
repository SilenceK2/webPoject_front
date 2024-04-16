import { createBrowserRouter } from "react-router-dom";

import Layout from "../../style/stylecomponents/Layout/Layout";
import JoinPage from "../../pages/Login/JoinPage";
import { lazy } from "react";
const TodoPage = lazy(() => import("../../pages/TodoPage"));
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
        path: "/signup",
        element: <JoinPage />,
      },
      {
        path: "/todopage",
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
