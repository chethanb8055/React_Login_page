import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
// import { Toast } from 'react-hot-toast
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;

  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/" className="">
        <img src={logo} alt="Logo" loading="lazy" width={160} height={32} />
      </Link>
      <nav>
        <ul className="flex text-richblack-100  gap-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* login singUp logout DashBoard */}
      <div className="flex items-center gap-x-4 ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link>
            <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
              Sing Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {setIsLoggedIn(false);toast.success("Logged Out")}}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[12px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
