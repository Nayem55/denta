import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../Header/logo.png'
import logo from '../Login/google-seeklogo.com.svg'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase_init";
import { updatePhoneNumber, updateProfile } from "firebase/auth";


const Signup = () => {
  const [email,setEmail]= useState('')
  const [pass,setPass]= useState('')
  const [name,setName]= useState('')
  const [num,setNum]= useState('')
  const [errorMessage,setErrorMessage]= useState('')
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  

  useEffect(()=>{
    if(user){
      navigate('/');
      updateProfile(auth.currentUser, {
        displayName: name ,
      })
      updatePhoneNumber()
  }
  if(error){
    setErrorMessage(error.message)
  }
  },[user,navigate,error,name,num])

  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePass=(e)=>{
    setPass(e.target.value);
  }
  const handleName=(e)=>{
    setName(e.target.value);
  }
  const handleNum=(e)=>{
    setNum(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(loading){
      return
    }
    createUserWithEmailAndPassword(email,pass);
  }

  return (
    <div className="login-container">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <img className="login-img" src={img} alt="" />
          <input onBlur={handleName} type="text" placeholder="Full Name" required />
          <input onBlur={handleNum} type="number" placeholder="Phone Number" required />
          <input onBlur={handleEmail} type="email" placeholder="Email" required />
          <input onBlur={handlePass} type="password" placeholder="Password" required />
          <input className="submit" type="submit" value="Sign up" />
          <p className="text-danger ms-2 fw-bold">{errorMessage}</p>
          <div className="d-flex">
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <button> <img className="logo mx-2" src={logo} alt="" /> Sign In With Google</button>
          <p className="text-center">Already have an account? <Link to="/login">Sign in</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
