import React from 'react'
import Template from '../components/Template'
import singupImg from "../assets/signup.png"

const Singup = ({setIsLoggedIn}) => {
  
  return (
    <Template
    title ="welcome Back"
    desc1 = "Build skill for today, tomorrow and beyond"
    decs2 = "Education to future-proof your career."    
    image={singupImg}
    formtype="singup"
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}

export default Singup