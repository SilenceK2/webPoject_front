import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
  headers: {
    access_token: localStorage.getItem("access_token"),
    "Access-Control-Allow-Origin": "*",
  },
});

api.defaults.timeout = 1000;
export default api;
