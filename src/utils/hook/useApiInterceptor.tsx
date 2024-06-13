import { useEffect } from "react";
import api from "../api/Instance";
import axios from "axios";

const useApiInterceptor = () => {
  // useEffect(() => {
  //   // const requestInterceptor = api.interceptors.request.use(
  //   //   (config) => {
  //   //     if (window.location.pathname.startsWith("/user")) {
  //   //       return config;
  //   //     }
  //   //     if (!localStorage.getItem("memberIdNumber")) {
  //   //       window.location.href = "/user/login";
  //   //       alert("로그인을 진행해주세요");
  //   //       return Promise.reject(new Error("로그인 필요"));
  //   //     }
  //   //     return config;
  //   //   },
  //   //   (error) => {
  //   //     return Promise.reject(error);
  //   //   }
  //   // );
  //   const responseInterceptor = api.interceptors.response.use(
  //     (response) => {
  //       return response;
  //     },
  //     async (error) => {
  //       if (error.response.status === 401) {
  //         try {
  //           const response = await api.post("/refresh_token");
  //           const accessToken = response.data.access_token;
  //           error.config.headers["Authorization"] = `Bearer ${accessToken}`;
  //           return axios.request(error.config);
  //         } catch (error) {
  //           console.error("refresh_token 없음:", error);
  //           localStorage.removeItem("access_token");
  //           window.location.href = "/users/login";
  //           return Promise.reject(error);
  //         }
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  //   return () => {
  //     // api.interceptors.request.eject(requestInterceptor);
  //     api.interceptors.response.eject(responseInterceptor);
  //   };
  // }, []);
};

export default useApiInterceptor;
