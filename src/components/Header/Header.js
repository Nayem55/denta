import React from "react";
import logo from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user]= useAuthState(auth);
  console.log(user);
  const handleSignOut=()=>{
    signOut(auth)
  }

  return (
    <nav className="navbar fixed-top d-flex">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="nav-link">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        {
          user?<Link onClick={handleSignOut} to="/login">Log out</Link>: <Link to="/login">Sign in</Link>
        }
        <Link className="book" to="/booking">BOOK NOW</Link>
      </div>
    </nav>
  );
};

export default Header;
