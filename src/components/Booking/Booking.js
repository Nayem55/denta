import React, { useState } from "react";
import "./Booking.css";
import img from "../Home/About.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";

const Booking = () => {
  const [show , setShow] = useState(false)
  const [user]= useAuthState(auth);
  return (
    <div className="booking">
      <img src={img} alt="" />
      <div className="form">
        <form className="form-container">
          <h2 className="ps-3">Make appointments</h2>
          <input type="text" placeholder={user?.displayName} readOnly/>
          <input type="number" placeholder="Phone Number"/>
          <input type="email" placeholder={user?.email} readOnly />
          <select className="form-select">
            <option >Department</option>
            <option value="1">Complete Whitening Pack</option>
            <option value="2">Sedation Dentistry</option>
            <option value="3">Dental Cleaning</option>
            <option value="4">Cosmetic Dentistry</option>
            <option value="5">Cleaning With Air Flow</option>
            <option value="6">Aligning The Teeth</option>
            <option value="7">Child's First Dental Visit</option>
          </select>
          <input type="date" className="date" />
          <select className="form-select">
            <option >Time</option>
            <option value="1">9.00 am</option>
            <option value="2">10.00 am</option>
            <option value="3">11.00 am</option>
            <option value="3">12.00 pm</option>
            <option value="4">1.00 pm</option>
            <option value="5">2.00 pm</option>
            <option value="6">3.00 pm</option>
            <option value="7">4.00 pm</option>
            <option value="8">5.00 pm</option>
            <option value="9">6.00 pm</option>
          </select>{" "}
          <button onClick={(e)=>{
            setShow(true);
            e.preventDefault();
          }}>BOOKING A VISIT</button>
        </form>
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="d-flex justify-content-center align-items-center w-100"
      >
        <div
          className={`toast position ${show&&"show"}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Succesful</strong>
            <button onClick={()=>setShow(false)}
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Your appointment has been fixed. Thank You.</div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
