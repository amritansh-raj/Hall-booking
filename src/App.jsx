import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import Home from "./components/header";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
