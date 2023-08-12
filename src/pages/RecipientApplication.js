import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { addRecipient } from "../api/recipient";
import NavBar from "../components/Navbar";

const RecipientApplication = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ urgent: false });

  const [error, setError] = useState("");

  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setError("");
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { mutate: submitForm, error: error2 } = useMutation({
    mutationFn: () => {
      return addRecipient(userInfo);
    },
    onSuccess: () => {
      setUser(true);
      navigate("/list");
    },
    onError: (error) => {
      console.log("Axios Error:", error, error2);
      // Handle the error, you can set it to the state to display to the user.
      setError("An error occurred while registering.");
    },
  });

  return (
    <div className="bg-slate-200 h-screen">
      <NavBar />
      <body>
        <div className="relative flex flex-col justify-center">
          <div className="mt-20 p-6 mb-20 m-auto bg-gray-100 rounded-md shadow-md ring-gray-800/50 lg:w-[30%]">
            <h1 className="text-3xl font-semibold text-center text-gray-700 mt-4">
              Recipient Form
            </h1>
            <form onSubmit={handleChange} className="space-y-4">
              <div>
                <label className="label">
                  <span className="text-base label-text text-black font-semibold mt-6">
                    Name
                  </span>
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text text-black font-semibold">
                    Civil ID
                  </span>
                </label>
                <input
                  name="civilid"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Civil ID"
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text text-black font-semibold">
                    File No.
                  </span>
                </label>
                <input
                  name="bbFile_no"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter File No."
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-black text-left ml-2"
              >
                Blood Type
              </label>
              <select class="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose Blood Type</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
              </select>
              <div>
                <label className="label">
                  <span className="text-base label-text text-black font-semibold">
                    Blood Units
                  </span>
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter No. of Blood Units"
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <button
                  onClick={() =>
                    setUserInfo({ ...userInfo, urgent: !userInfo.urgent })
                  }
                >
                  Toggle Urgnet
                </button>
                {userInfo.urgent ? (
                  <p className="text-red-600">Urgent</p>
                ) : (
                  <p className="text-yellow-500">Not Urgent</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  onClick={submitForm}
                  className="btn w-[25%]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default RecipientApplication;
