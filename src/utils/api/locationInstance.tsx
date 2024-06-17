import axios from "axios";
const location = axios.create({
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

location.defaults.timeout = 3000;
export default location;
