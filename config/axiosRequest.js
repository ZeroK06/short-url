import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VERCEL_URL || "http://localhost:3000/api/",
  timeout: 3000,
});

export default axiosInstance;