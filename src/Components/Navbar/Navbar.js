import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";



const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav style={pathname.includes('blog') ? { display: 'none' } : { display: 'flex' }}>
      <div className="logo-container" >
        <img src={Logo} alt="" />
      </div >
      <div className="link-container">
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='home'>Home</NavLink>
        <Link to='/videos' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Video</Link>
        <Link to='/login' className={({ isActive }) => isActive ? 'active-link' : 'link'}>Login</Link>
      </div>
    </nav >
  );
};

export default Navbar;
