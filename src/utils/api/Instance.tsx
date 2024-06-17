import axios from "axios";
const memberId = localStorage.getItem("memberId");
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Member-Id": memberId,
  },
});

api.defaults.timeout = 3000;
export default api;
