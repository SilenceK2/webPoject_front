import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router/router";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
