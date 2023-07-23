import React from "react";
import frameImage from "../assets/frame.png";
import SingupForm from "./SingupForm";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, decs2, image, formtype, setIsLoggedIn }) => {
  console.log(formtype, "template");
  return (
    // left part
    <div className="flex w-11/12 max-w-[1160px] py-5 mx-auto gap-y-0 gap-x-12 justify-center sm:justify-between text-richblack-100">
 

      <div className="w-11/12 max-w-[450px] flex flex-col">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem]  mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{decs2}</span>
        </p>
        {formtype === "singup" ? (
          <SingupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-full items-center gap-x-2 my-4">
          <div className="h-[1px] bg-richblack-700 w-full"></div>
          <p className="uppercase text-richblack-700 font-medium leading-[1.375rem]">
            OR
          </p>
          <div className="h-[1px] bg-richblack-700 w-full"></div>
        </div>
        {/* button */}
        <button className="flex rounded-md items-center justify-center border border-richblack-700 font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p className="text-white">Sing in with Google</p>
        </button>
      </div>
      {/* right part */}
      <div className="relative w-11/12 max-w-[450px] hidden sm:block">
        <img
          src={frameImage}
          alt="frameImage"
          with={550}
          height={504}
          loading="lazy"
          
        />
        <img
          src={image}
          alt="Students"
          with={550}
          height={504}
          loading="lazy"
          // 
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;
