import loginLogo from "../assets/login.png";
import brandLogo from "../assets/brand.png";
import axiosInstance from "../api/axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setTokens } from "../storage/storage";

export function Login() {
  const navigate = useNavigate();

  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axiosInstance.post("/login/token/", formData);
      console.log(response.data);

      const access = response.data.access;
      const refresh = response.data.refresh;
      setTokens(access, refresh);
      resetForm();
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setErrors({});
  }, [formData]);

  const validateForm = (data) => {
    let errors = {};

    // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.username)) {
    //   errors.username = "Invalid username address";
    // }

    if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  return (
    <>
      <div className="h-screen bg-[#1a1c20] flex justify-center">
        <div className="container flex flex-row m-20 bg-[#e9e9e9] rounded-2xl">
          <div className="hidden lg:flex lg:flex-auto lg:w-64 lg:rounded-2xl lg:justify-center lg:items-center">
            <img
              src={loginLogo}
              alt="not found"
              className="w-full h-auto max-h-full"
            />
          </div>

          <div className="flex-auto w-48 bg-white rounded-2xl m-4 flex flex-col">
            <div className="flex justify-center items-center m-2 h-2/5">
              <img
                src={brandLogo}
                className="h-full object-contain"
                alt="not found"
              />
            </div>

            <div className="flex justify-center text-center text-black flex-col">
              <p className="mb-2 antialiased font-serif font-bold text-4xl">
                Welcome Back!!
              </p>
              <p className="mb-6">Please enter your details</p>
            </div>

            <div className="flex justify-center items-center m-2 lg:w-full">
              <form
                className="space-y-5 w-full lg:w-4/6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div>
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      onChange={(event) => handleInputChange(event)}
                      className={`block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.username ? "ring-red-500" : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {errors.username && (
                    <div className="text-red-500 text-xs">
                      {errors.username}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(event) => handleInputChange(event)}
                      className={`block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                        errors.password ? "ring-red-500" : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {errors.password && (
                    <div className="text-red-500 text-xs">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full bg-black px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
