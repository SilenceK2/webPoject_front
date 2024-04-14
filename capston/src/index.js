import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router/router";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import Loading from "./pages/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
