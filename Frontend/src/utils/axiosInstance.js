import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle Common errors globally
    if (error.response) {
      if (error.response.status === 401) {
        // Redirect To login page
        window.location.href = "/";
      } else if (error.response.status === 500) {
        console.error("Server Error. Please Try again Later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
