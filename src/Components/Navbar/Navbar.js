import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="link-container">
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='home'>Home</NavLink>
        <Link to='/videos' className="link">Video</Link>
        <Link to='/login' className="link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
