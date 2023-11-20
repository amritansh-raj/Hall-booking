export const configureAxios = () => {
  return {
    baseURL: "http://10.21.84.196:8000/booking",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
};
