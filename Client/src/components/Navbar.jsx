import React from 'react'
import Logo from "../assets/Logo"
import "../App.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <nav className='flex'>
          <div className='nav-logo'>
          <Link to="/" style={{textDecoration:"None"}}><Logo/></Link>
          </div>
          <div className='user-action'>
            <div className='login'>
              <button className='login-btn'>Login</button>
            </div>
            <div className='signup'>
              <button className='signup-btn'>Sign up</button>
            </div>
          </div>
        </nav>
        </div>
    </>
  )
}

export default Navbar