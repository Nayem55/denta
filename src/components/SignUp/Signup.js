import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../Header/logo.png'
import logo from '../Login/google-seeklogo.com.svg'
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebase_init";


const Signup = () => {
  const [email,setEmail]= useState('')
  const [pass,setPass]= useState('')
  const [userName,setName]= useState('')
  const [num,setNum]= useState('')
  const [errorMessage,setErrorMessage]= useState('')
  const navigate = useNavigate()
  const location= useLocation();
  const [profile]= useUpdateProfile(auth)
 
  const [
    createUser,
    ,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const [user]= useAuthState(auth);
  console.log(user)
  // useEffect(()=>{
  //   if(user){
  //     navigate(location.state);
  // }
  // if(error){
  //   setErrorMessage(error.message)
  // }
  // },[user,navigate,error,name,num])

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
  const handleSubmit= async e=>{
    e.preventDefault();
    await createUser(email,pass);
    await profile({displayName:userName , photoURL : num});
  }

  return (
    <div className="login-container">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <img className="login-img" src={img} alt="" />
          <input onBlur={handleName} type="text" placeholder="Full Name" />
          <input onBlur={handleNum} type="number" placeholder="Phone Number" />
          <input onBlur={handleEmail} type="email" placeholder="Email" />
          <input onBlur={handlePass} type="password" placeholder="Password"  />
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
