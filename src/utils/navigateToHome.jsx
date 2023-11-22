import { useNavigate } from "react-router-dom";

export const navigateToHome = () => {
  const navigate = useNavigate();
  navigate("/");
  console.log("dasdas")
};
