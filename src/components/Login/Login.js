import React, { useEffect, useState } from "react";
import "./Login.css";
import img from "../Header/logo.png";
import logo from './google-seeklogo.com.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase_init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email,setEmail]= useState('')
  const [pass,setPass]= useState('')
  const [errorMessage,setErrorMessage]= useState('')
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate(from, { replace: true });
  }
  if(error){
    setErrorMessage(error.message)
  }
  },[user,error])
  
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePass=(e)=>{
    setPass(e.target.value);
  }

  const handleSubmit=(e)=>{

    e.preventDefault();
    if(loading){
      return
    }
    signInWithEmailAndPassword(email, pass);
  }

const handleNavigate=()=>{
  navigate("/signup",{state:from})
}

  return (
    <div className="login-container">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <img className="login-img" src={img} alt="" />
          <input onBlur={handleEmail} type="email" placeholder="Email" required />
          <input onBlur={handlePass} type="password" placeholder="Password" required />
          <input className="submit" type="submit" value="Sign in" /> 
          <p className="text-danger ms-2 fw-bold">{errorMessage}</p>
          <div className="d-flex">
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <button> <img className="logo mx-2" src={logo} alt="" /> Sign In With Google</button>
          <p className="text-center">Don't have an account? <span className="span" onClick={handleNavigate} > Sign up</span> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
