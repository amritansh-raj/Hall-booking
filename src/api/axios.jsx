import axios from "axios";
import { getRefreshToken, setTokens } from "../storage/storage";
import { navigateToHome } from "../utils/navigateToHome";
import { BaseUrl, configureAxios } from "../utils/axiosConfig";

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
    const errorResponse = error.response;

    // if (
    //   error.response.status === 401 &&
    //   originalRequest.url === BaseUrl + "/refresh/"
    // ) {
    //   navigateToHome();
    //   return Promise.reject(error);
    // }

    if (
      errorResponse.status === 401 &&
      !originalRequest._retry &&
      errorResponse.data.code === "token_not_valid"
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        const response = await axiosInstance.post("/refresh/", {
          refresh: refreshToken,
        });

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
