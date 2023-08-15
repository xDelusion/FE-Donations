import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <div className="navbar bg-red-500 flex justify-center items-center">
        <div className="flex-1">
          <Link to="/list">
            <img
              className="w-[10%] h-[10%]"
              src="https://img.icons8.com/?size=512&id=8mUEYCITnqJU&format=png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white font-semibold pr-10 gap-10">
            {!user && (
              <li className="">
                <Link to="/" className="hover:bg-black hover:text-white">
                  Login
                </Link>
              </li>
            )}
            <li>
              <Link to="/register" className="hover:bg-black hover:text-white">
                Register Emp.
              </Link>
            </li>
            <li>
              <Link to="/list" className="hover:bg-black hover:text-white">
                Recipients
              </Link>
            </li>
            <li>
              <Link
                to="/recipient-form"
                className="hover:bg-black hover:text-white"
              >
                Add Recipient
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
