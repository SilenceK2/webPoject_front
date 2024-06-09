import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import SignupPage from "../../pages/Login/SignupPage";
import MyInfo from "../../pages/Info";
import React from "react";
import { Navigate } from "react-router-dom";
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const ViewPortPage = lazy(() => import("../../styles/Layouts/ViewPort"));
const Layout = lazy(() => import("../../styles/Layouts/layout/Layout"));
const LoginPage = lazy(() => import("../../pages/Login/LoginPage"));
const HomePage = lazy(() => import("../../pages/Home/Home"));
const ErrorPage = lazy(() => import("../../pages/RouterPages/ErrorPage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewPortPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "signup",
            element: <SignupPage />,
          },
          {
            path: "todopage",
            element: <TodoPage />,
          },
          {
            path: "mypage",
            element: <MyInfo />,
          },
        ],
      },
    ],
  },
]);

export default router;
