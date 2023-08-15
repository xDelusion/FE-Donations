import { useMutation } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { login, register } from "../api/auth";
import jwt_decode from "jwt-decode";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/media/AdobeStock_198163710.png";
import lifeImage from "../assets/media/Life.png";

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

  useEffect(() => {
    if (user) {
      navigate("/list");
    }
  }, [user]);

  return (
    <div>
      <body className="bg-white">
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
          <div className="w-full p-6 m-auto rounded-xl shadow-2xl border border-r-transparent ring-gray-800/50 bg-gray-100 lg:w-[30%] ">
            <div className="flex justify-center">
              <img className="w-[150px] h-[150px]" src={lifeImage} alt="Logo" />
            </div>
            <h1 className="text-3xl font-semibold text-center text-gray-900 ">
              Login
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="w-[60%] m-auto ">
                <label className="label mt-8">
                  <span className="text-base  label-text   font-semibold text-black">
                    Civl ID
                  </span>
                </label>
                <input
                  name="civilid"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Civil ID"
                  className="w-[100%] input input-bordered bg-white border-gray-400"
                />
              </div>
              <div className="w-[60%] m-auto ">
                <label className="label">
                  <span className="text-base label-text  font-semibold text-black">
                    Emp No.
                  </span>
                </label>
                <input
                  name="empNo"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Emp No."
                  className="w-[100%] input input-bordered bg-white border-gray-400"
                />
              </div>
              <div className="w-[60%] m-auto ">
                <label className="label">
                  <span className="text-base label-text  font-semibold text-black">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter Password"
                  className="w-[100%] input input-bordered bg-white border-gray-400"
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={loginFn}
                  className="btn w-[20%] bg-red-600 text-white hover:bg-red-700 mt-5"
                >
                  Login
                </button>
                {/* {data.map((q) => {
                  return (
                    <div className="border border-black rounded-md">
                      {q.question}
                      <div>{q.answer}</div>
                    </div>
                  );
                })} */}
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
