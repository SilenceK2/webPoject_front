import { createBrowserRouter } from "react-router-dom";

import Layout from "../../style/stylecomponents/Layout/Layout";
import { lazy } from "react";
import SignupPage from "../../pages/Login/SignupPage";
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const LoginPage = lazy(() => import("../../pages/Login/LoginPage"));
const HomePage = lazy(() => import("../../pages/Home"));
const ErrorPage = lazy(() => import("../../pages/RouterPages/ErrorPage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
