import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-red-800">
        <div className="flex-1">
          <img src="../assets/media/AdobeStock_222439777.png" alt="Logo" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white font-semibold pr-10 gap-10">
            <li className="">
              <Link to="/" className="hover:bg-black hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:bg-black hover:text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// const Navbar = () => {
//   return (
//     <div>
//       <Link to="/">
//         <Button className="text-l normal-case front-semibold text-white">
//           +life
//         </Button>
//       </Link>
//       <ul>
//         <li>
//           <NavLink className="border-r-4" exact to="/">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className="border-r-4" exact to="/register">
//             Register
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
