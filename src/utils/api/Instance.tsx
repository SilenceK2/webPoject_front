import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

/**
 * 요청 인터셉터
 * 로컬 스토리지에 access_token이 없으면 요청 url을 /users/login으로 변경
 */

// api.interceptors.request.use(
//   (config) => {
//     if (
//       window.location.pathname === "/login" ||
//       window.location.pathname === "/signup"
//     ) {
//       return config;
//     }
//     if (!localStorage.getItem("memberIdNumber")) {
//       window.location.href = "/login";
//       alert("로그인을 진행해주세요");
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// /**
//  * 응답 인터셉터
//  * refresh token을 사용하여 새로운 access token을 요청 재시도 (클라이언트에는 refresh_token 저장 x)
//  */
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401) {
//       try {
//         const response = await api.post("/refresh_token");
//         const accessToken = response.data.access_token;
//         error.config.headers["Authorization"] = `Bearer ${accessToken}`;
//         return axios.request(error.config);
//       } catch (error) {
//         console.error("refresh_token없음:", error);
//         localStorage.removeItem("access_token");
//         window.location.href = "/users/login";
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

api.defaults.timeout = 2000;
export default api;
