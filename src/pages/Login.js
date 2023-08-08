import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { login, register } from "../api/auth";
import jwt_decode from "jwt-decode";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const { mutate: loginFn, error } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ decoded: decoded });
        Navigate("/list");
      }
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    loginFn();
  };

  return (
    <div>
      <body>
        <div class="relative flex flex-col justify-center h-screen overflow-hidden">
          <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:w-[30%]">
            <h1 class="text-3xl font-semibold text-center text-gray-700">
              Login
            </h1>
            <form onSubmit={handleFormSubmit} class="space-y-4">
              <div>
                <label class="label">
                  <span class="text-base label-text">Civl ID</span>
                </label>
                <input
                  name="civilid"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Civil ID"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Emp No.</span>
                </label>
                <input
                  name="empNo"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Emp No."
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Password</span>
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter Password"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <button type="submit" onClick={loginFn} class="btn w-[20%]">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
