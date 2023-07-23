import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    const { value, name } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler} className="">
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>

        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
      </label>
      <label htmlFor="" className="relative">
      <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
          Password<sup className="text-pink-200">*</sup>
        </p>

        <input
          type={showPassword ? "text" : "password"}
          required
          name="password"
          value={formData.passwrod}
          onChange={changeHandler}
          placeholder="Enter Password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-[73px] cursor-pointer"
        
        >
          {showPassword ? <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF"/> : <AiOutlineEye fontSize={20} fill="#AFB2BF" />}
        </span >
        <Link to="#">
          <p 
            className="text-xs mt-1 text-blue-100  max-w-max ml-auto"
          >Forgot Password</p>
        </Link>
      </label>
      <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] w-full mt-6">Login</button>
    </form>
  );
};

export default LoginForm;
