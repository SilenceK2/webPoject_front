import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import SignupPage from "../../pages/Login/SignupPage";
import MyInfo from "../../pages/Info";
import React from "react";
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const ViewPortPage = lazy(
  () => import("../../style/stylecomponents/Layouts/ViewPort")
);
const Layout = lazy(
  () => import("../../style/stylecomponents/Layouts/layout/Layout")
);
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
