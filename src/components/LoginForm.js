import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'


const LoginForm = ({setIsLoggedIn}) => {
    console.log(setIsLoggedIn,"LoginForm")

    const navigate =useNavigate();

    const [formData,setFormData] =useState({
        email:'',password:""
    })
    const [showPassword,setShowPassword] =useState(false)
    console.log(formData)

    function changeHandler(event){
        const {value,name} =event.target
        setFormData((prevData)=>{
            return{...prevData,[name]:value
            }
        })
        }

        function submitHandler(event) {
            event.preventDefault();
            setIsLoggedIn(true);
        toast.success("Logged In")
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="">
            <p>
                Email Address <sup>*</sup>
            </p>
        
        <input type="email"
        required
        name='email'
        value={formData.email}
        onChange={changeHandler}
        placeholder='Enter email id'
        
        />
        </label>
        <label htmlFor="">
            <p>
                Password<sup>*</sup>
            </p>
        
        <input type={showPassword?("text"):("password")}
        required
        name='password'
        value={formData.passwrod}
        onChange={changeHandler}
        placeholder='Enter Password'
        
        />
        <span onClick={()=>setShowPassword((prev)=>!prev)}>
            {
                showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)
            }
        </span>
                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
        </label>
        <button>
            Singin
        </button>
    </form>    


  )
}

export default LoginForm