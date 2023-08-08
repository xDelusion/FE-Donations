import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
// import backgroundsignup from "../media/signup.jpg";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setError("");
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordConfirmation = (e) => {
    setConfirmPassword(e.target.value);
  };

  const { mutate: registerFn, error: error2 } = useMutation({
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (userInfo.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    registerFn();
  };

  // if (user) {
  //   return <Navigate to="/signin" />;
  // }

  return (
    <div>
      <body>
        <div class="relative flex flex-col justify-center overflow-scroll ">
          <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:w-[30%]">
            <h1 class="text-3xl font-semibold text-center text-gray-700">
              Register
            </h1>
            <form onSubmit={handleFormSubmit} class="space-y-4">
              <div>
                <label class="label">
                  <span class="text-base label-text">Name</span>
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Full Name"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Civil ID</span>
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
                  <span class="text-base label-text">Hospital ID</span>
                </label>
                <input
                  name="hospital_id"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Hospital ID"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Employee No.</span>
                </label>
                <input
                  name="empNo"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Employee No."
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Email</span>
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Email"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <label class="label">
                  <span class="text-base label-text">Phone</span>
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Phone No."
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
                <label class="label">
                  <span class="text-base label-text">Confirm Password</span>
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Please confirm Password"
                  class="w-full input input-bordered"
                />
              </div>
              <div>
                <button type="submit" onClick={registerFn} class="btn w-[20%]">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};
export default Register;
