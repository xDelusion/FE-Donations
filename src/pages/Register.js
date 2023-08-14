import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";


// import NavBar from "../components/Navbar";

// import backgroundsignup from "../media/signup.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setError("");
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };


  const handlePasswordConfirmation = (e) => {
    setConfirmPassword(e.target.value);
  };

  // const {
  //   data: dataProfile,
  //   isFetching,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["profile"],
  //   queryFn: () => getMe(),
  //   onSuccess: (data) => {
  //     setUserInfo(data);
  //   },
  // });

  // const { data: paciuser } = useQuery({
  //   queryKey: ["paciusers"],
  //   queryFn: () => getAllPaci(),
  //   onSuccess: (data) => {
  //     // setUserInfo(data);
  //     console.log(`data = ${data}`);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

  // const civilIDChangeHandler = (value) => {
  //   const foundUser = paciuser?.find((user) => user.civilid === value);
  //   const date1 = new Date(foundUser.dob);
  //   const day = date1.getDate();
  //   const month = date1.getMonth() + 1; // Months are zero-based
  //   const year = date1.getFullYear();
  //   const formattedDate = day + "/" + month + "/" + year;

  //   if (foundUser) {
  //     setPasswordError("");

  //     return setUserInfo({
  //       ...userInfo,
  //       civilid: value,
  //       name: foundUser.name,
  //       dob: formattedDate,
  //       bloodType: foundUser.bloodType,
  //     });
  //   } else {
  //     setPasswordError("Not valid civil id");
  //   }
  // };


  const { mutate: registerFn, error: error2 } = useMutation({
    mutationFn: () => register(userInfo),
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerFn();
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!regex.test(password)) {
      return "must be at least 8 characters long and contain one uppercase, one lowercase letter, and one number.";
    }
    return "";
  };

  const passwordChangeHandler = (value) => {
    const err = validatePassword(value);

    setPasswordError(err);
    if (err === "") {
      setPassword(value);
      return setUserInfo({ ...userInfo, password: value });
    }
  };

  // if (user) {
  //   return <Navigate to="/signin" />;
  // }

  return (
    <div className="bg-gray-200">
      <body>
        <div className="relative flex flex-col justify-center mt-24 mb-24">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-gray-800/50 lg:w-[30%]">
            <h1 className="text-3xl font-semibold text-center text-gray-700">
              Register
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="label">
                  <span className="text-base label-text font-semibold text-black">
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
                  <span className="text-base label-text font-semibold text-black">
                    Civil ID
                  </span>
                </label>
                <input
                  name="civilid"
                  onChange={handleChange}
                  //  onBlur={() => civilIDChangeHandler(userInfo.civilid)}
                  type="text"
                  placeholder="Enter Civil ID"
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text font-semibold text-black">
                    Hospital ID
                  </span>
                </label>
                <input
                  name="hospital_id"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Hospital ID"
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text font-semibold text-black">
                    Employee No.
                  </span>
                </label>
                <input
                  name="empNo"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Employee No."
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text font-semibold text-black">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Email"
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text font-semibold text-black">
                    Phone
                  </span>
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Phone No."
                  className="w-full input input-bordered bg-slate-200"
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text font-semibold text-black">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  onChange={(value) => {
                    passwordChangeHandler(value);
                  }}
                  type="password"
                  placeholder="Enter Password"
                  className="w-full input input-bordered bg-slate-200"
                />
                {passwordError !== "" && (
                  <div style={{ color: "grey" }}>{passwordError}</div>
                )}
              </div>
              {/* <div>
                <label className="label">
                  <span className="text-base label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmpassword"
                  onChange={handleChange}
                  type="password"
                  placeholder="Please confirm Password"
                  className="w-full input input-bordered"
                />
              </div> */}
              <div>
                <button
                  type="submit"
                  onClick={registerFn}
                  className="btn w-[20%] bg-red-700 text-white hover:bg-red-900"
                >
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
