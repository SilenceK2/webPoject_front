import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css";
import { RecoilRoot } from "recoil";
// window.Kakao.init(process.env.REACT_APP_KAKAO_APPKEY);
// window.Kakao.isInitialized();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
