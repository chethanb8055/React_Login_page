import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
const Login = ({setIsLoggedIn}) => {

  return (
    
    <Template
      title ="welcome Back"
      desc1 = "Build skill for today, tomorrow and beyond"
      decs2 = "Education to future-proof your career."    
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login