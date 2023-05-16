import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

const Header = () => {
  const [navbarIsClose, setNavbarIsClose] = useState(true)

  const handleCloseNavbar = () => {
    setNavbarIsClose(!navbarIsClose)
  }

  const handleClick = () => {
    setNavbarIsClose(true)
  }


  return (
    <header className='header'>
      <h1 className='header_title' onClick={handleClick}><Link to={"/"}>e-commerce</Link></h1>
      <div className='header_icon-container'>
        <i onClick={handleCloseNavbar} className='header_icon bx bx-menu'></i>
      </div>
      <nav className={`header_navbar ${navbarIsClose && "header_navbar-close"} `}>
        <ul className='header_list'>
          <li className='header_list-item' onClick={handleCloseNavbar}><Link to={"/"}>Home</Link></li>
          <li className='header_list-item' onClick={handleCloseNavbar}><Link to={"/login"}>Login</Link></li>
          <li className='header_list-item' onClick={handleCloseNavbar}><Link to={"/register"}>Register</Link></li>
          <li className='header_list-item' onClick={handleCloseNavbar}><Link to={'/purchases'}>Purchases</Link></li>
          <li className='header_list-item' onClick={handleCloseNavbar}><Link to={"/cart"}>Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header