import axios from "axios";
import { getRefreshToken } from "../storage/storage";

const instance = axios.create({
  baseURL: "http://10.42.0.182:8000/booking",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        const response = await instance.post("/refresh", { refreshToken });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
