import loginLogo from "../assets/login.png";
import brandLogo from "../assets/brand.png";
import axiosInstance from "../axios";
import React, { useState } from "react";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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
      const response = await axiosInstance.post("/login", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  return (
    <>
      <div className="h-screen bg-[#1a1c20] flex justify-center">
        <div className="container m-20 bg-[#e9e9e9] rounded-2xl flex flex-row">
          <div className="hidden lg:flex lg:flex-auto lg:w-64 lg:rounded-2xl lg:justify-center lg:items-center">
            <img src={loginLogo} alt="not found" />
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

            <div className="flex justify-center items-center m-2">
              <form className="space-y-5 w-4/6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                    />
                  </div>
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
