import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
// import { Toast } from 'react-hot-toast
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn
    
    let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt="Logo" loading="lazy" width={160} height={32} />
        </Link>
        <nav>
            <ul className='flex gap-2 justify-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li> 
            </ul>
        </nav>
        {/* login singUp logout DashBoard */}
            <div className='flex ml-5 mr-3 gap-3'>
                {   !isLoggedIn &&
                    <Link to="/login" >
                        <button>
                                    Login
                        </button>
                    </Link>
                }
                {   !isLoggedIn &&
                    <Link to="/singup" onClick={()=>{setIsLoggedIn(false);
                        toast.success("Logged Out")}} >
                        <button>
                                    Sing Up
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/" >
                        <button onClick={()=>{setIsLoggedIn(false);
                            toast.success("Logged Out")}}>
                                    Log Out
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/dashboard" >
                        <button>
                                    Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
  )
}

export default Navbar