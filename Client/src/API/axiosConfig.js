import axios from "axios";

const instance = axios.create({
  baseURL: "https://air-bnb-6.onrender.com/api",
  withCredentials: true,
});

export default instance;
