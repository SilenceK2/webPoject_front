import { createBrowserRouter } from "react-router-dom";
import Layout from "../../style/stylecomponents/Layout/Layout";
import { lazy } from "react";
import SignupPage from "../../pages/Login/SignupPage";
import MyInfo from "../../pages/Info";
import React from "react";
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const LoginPage = lazy(() => import("../../pages/Login/LoginPage"));
const HomePage = lazy(() => import("../../pages/Home"));
const ErrorPage = lazy(() => import("../../pages/RouterPages/ErrorPage"));
const SearchPage = lazy(() => import("../../pages/SearchPage"));
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
      {
        path: "/searchpage",
        element: <SearchPage />,
      },
      {
        path: "/mypage",
        element: <MyInfo />,
      },
    ],
  },
]);

export default router;
