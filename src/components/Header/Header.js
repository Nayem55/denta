import React from "react";
import logo from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    color: "#00a9b1",
    fontWeight: "bold"
  };

  const [user]= useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
  }

  return (
    <nav className="navbar fixed-top d-flex">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="nav-link">
        <NavLink to="/home" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } > Home </NavLink>
        <NavLink to="/services" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Services</NavLink>
        <NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink>
        {
          user?<Link onClick={handleSignOut} to="/login">Log out</Link>: <NavLink to="/login" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Sign in</NavLink>
        }
        <Link className="book" to="/booking">BOOK NOW</Link>
      </div>
    </nav>
  );
};

export default Header;
