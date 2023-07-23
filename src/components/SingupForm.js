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
    accountType:""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false)
  const [accountType,setAccountType] =useState("student")
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
        ...formData,accountType
      }
      console.log(accountData)
      // console.log(formData)
   
    }
  }
  return (
    <div>
      <div className="flex bg-richblack-800 p-2 gap-z-1 mt-8 mb-2 ml-0 rounded-full max-w-max">
        <button className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}"py-3.5 px-5 rounded-full transition-all duration-200"`} onClick={()=>setAccountType("student")}>Student</button>
        <button 
         className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"}"py-3.5 px-5 rounded-full transition-all duration-200"`}
        
        onClick={()=>setAccountType("instructor")}>Instructor</button>
      </div>
      <form action="" onSubmit={submitHandler}>
      <div className="flex gap-x-4">
        
          <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">First Name <sup className="text-pink-200">*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 w- rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          <label htmlFor=""  className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Last Name <sup className="text-pink-200">*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          </div>
        {/* emails Add*/}
        
          <label htmlFor="">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Email Address <sup className="text-pink-200">*</sup></p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={formData.email}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
          {/* create Password and conform password */}
          <div className="flex gap-x-4 w-full justify-between">
            {/* create Password */}
            
            <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Create password <sup className="text-pink-200">*</sup></p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Your Password"
                value={formData.password}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
              <span onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[37px] cursor-pointer"
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" /> : <AiOutlineEye fontSize={20} fill="#AFB2BF" />}
              </span>
            </label >
                {/* confirm Password */}
                <label htmlFor="" className="relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">Confirm password <sup className="text-pink-200">*</sup></p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
              <span
              className="absolute right-3 top-[37px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible fontSize={20} fill="#AFB2BF" /> : <AiOutlineEye fontSize={20} fill="#AFB2BF" />}
              </span>
            </label>
      
            
          </div>

          <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SingupForm;