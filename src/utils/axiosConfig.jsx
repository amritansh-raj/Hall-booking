export const configureAxios = () => {
  return {
    baseURL: "http://10.21.66.92:8000/booking",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };
};
