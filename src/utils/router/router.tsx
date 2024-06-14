import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MyInfo from "../../pages/Info";
import { Navigate } from "react-router-dom";
const SignupPage = lazy(() => import("../../pages/Signup/index"));
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const ViewPortPage = lazy(() => import("../../styles/Layouts/ViewPort"));
const Layout = lazy(() => import("../../styles/Layouts/layout/Layout"));
const LoginPage = lazy(() => import("../../pages/Login"));
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
            children: [
              {
                path: "mypage",
                element: <MyInfo />,
              },
            ],
          },
          {
            path: "user",
            element: <Layout type={false} />,
            children: [
              {
                path: "login",
                element: <LoginPage />,
              },
              {
                path: "signup",
                element: <SignupPage />,
              },
            ],
          },
          {
            path: "todopage",
            element: <TodoPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
