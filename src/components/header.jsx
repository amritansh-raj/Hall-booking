import React, { useEffect, useState } from "react";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
} from "../storage/storage";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  let Links = [
    { name: "ADD HALL", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault;
    const refresh = getRefreshToken();

    try {
      const response = await axiosInstance.post("/logout/", {
        refresh: refresh,
      });
      navigate("/");
      clearTokens();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axiosInstance.get("/profile/");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, []);

  return (
    <header className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          {/* <BookOpenIcon className='w-7 h-7 text-blue-600'/> */}
          <span>VenueVista</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <div>asdsa</div> : <div>adas</div>}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                key={link.index}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            onClick={handleLogout}
            className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static"
          >
            Logout
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
