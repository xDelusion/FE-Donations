import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { login, register } from "../api/auth";
import jwt_decode from "jwt-decode";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import backgroundImage from "../assets/media/AdobeStock_198163710.png";
const Login = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const { mutate: loginFn, error } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ decoded: decoded });
        navigate("/list");
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
      <NavBar />
      <body className="bg-gray-200">
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
          <div className="w-full p-6 m-auto rounded-xl shadow-md ring-gray-800/50 bg-white lg:w-[30%]">
            <h1 className="text-3xl font-semibold text-center text-gray-900 mt-3">
              Login
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="label mt-8">
                  <span className="text-base label-text ml-32 font-semibold text-black">
                    Civl ID
                  </span>
                </label>
                <input
                  name="civilid"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Civil ID"
                  className="w-[51%] input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text ml-32 font-semibold text-black">
                    Emp No.
                  </span>
                </label>
                <input
                  name="empNo"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Emp No."
                  className="w-[51%] input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text ml-32 font-semibold text-black">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter Password"
                  className="w-[51%] input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={loginFn}
                  className="btn w-[20%] bg-red-700 text-white hover:bg-red-900 mt-5"
                >
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
