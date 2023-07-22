import React from "react";
import frameImage from "../assets/frame.png";
import SingupForm from "./SingupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, decs2, image, formtype, setIsLoggedIn }) => {
  console.log(formtype,"template")
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-12">
      <h1>{title}</h1>
      <p>
        <span>{desc1}</span>
        <span>{decs2}</span>
      </p>
      {formtype === "singup" ? <SingupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
      <div>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <button>
            <p>Sing in with Google</p>
      </button>
      <div>
        <img
          src={frameImage}
          alt="frameImage"
          with={550}
          height={504}
          loading="lazy"
        />
        <img
          src={frameImage}
          alt="Students"
          with={550}
          height={504}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
