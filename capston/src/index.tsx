import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router/router";
import "./style/main.css";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import Loading from "./pages/RouterPages/Loading";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <RecoilRoot>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </RecoilRoot>
);
