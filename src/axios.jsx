import axios from "axios";

const instance = axios.create({
  baseURL: "",
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
