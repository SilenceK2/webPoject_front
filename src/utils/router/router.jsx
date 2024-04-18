import { createBrowserRouter } from "react-router-dom";

import Layout from "../../style/stylecomponents/Layout/Layout";
import JoinPage from "../../pages/Login/SignupPage";
import { lazy } from "react";
import SignupPage from "../../pages/Login/SignupPage";
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
        element: <SignupPage />,
      },
      {
        path: "/todopage",
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
