import axios from "axios";
import { getRefreshToken, setTokens } from "../storage/storage";
import { navigateToHome } from "../utils/navigateToHome";
import { configureAxios } from "../utils/axiosConfig";

const axiosInstance = axios.create(configureAxios());

axiosInstance.interceptors.request.use(
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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        const response = await axiosInstance.post("/refresh/", {
          refresh: refreshToken,
        });
        console.log(response.data);

        const access = response.data.access;
        const refresh = response.data.refresh;
        setTokens(access, refresh);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return axios(originalRequest);
      } catch (error) {
        console.log(error);
        // navigateToHome();
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
