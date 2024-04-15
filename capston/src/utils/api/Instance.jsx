import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
  headers: {
    access_token: localStorage.getItem("access_token"),
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

api.defaults.timeout = 3000;
export default api;
