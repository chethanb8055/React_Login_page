import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const SingupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate =useNavigate();

  function changeHandler(event) {
    const { value, name } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  function submitHandler(event){
    // const navigate =useNavigate();
    event.preventDefault();
    if(formData.password!==formData.confirmPassword){

      toast.error("Password do not match")
      return ;
     
    }else{
      navigate("/dashboard")
      toast.success("Account Created")
      setIsLoggedIn(true)
      const accountData={
        ...formData
      }
      // console.log(formData)
      console.log(accountData)
   
    }
  }
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">
            <p>First Name</p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>
          <label htmlFor="">
            <p>Last Name</p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>
        {/* emails Add*/}
        <div>
          <label htmlFor="">
            <p>Email Address</p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
            />
          </label>
          {/* create Password and conform password */}
          <div>
            {/* create Password */}
            <label htmlFor="">
              <p>Create password</p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Your Password"
                value={formData.password}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
                {/* confirm Password */}
                <label htmlFor="">
              <p>Confirm password</p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
          </div>
        </div>
        <button>
            Create Account
        </button>
      </form>
    </div>
  );
};

export default SingupForm;
