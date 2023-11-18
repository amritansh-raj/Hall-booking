import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.21.81.147:8000/booking",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
