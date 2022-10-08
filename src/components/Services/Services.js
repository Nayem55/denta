import React from "react";
import "./Services.css";
import Service1 from "./service1.jpg";
import Service2 from "./service2.jpg";
import Service3 from "./service3.jpg";
import Service4 from "./service4.jpg";
import Service5 from "./service5jpg.jpg";
import Service6 from "./service6.jpg";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="services">
        <h1 className="text-center">Departments & Services</h1>
        <p>
          Patients of the clinic are provided with a full range of services for
          dental medicine
        </p>
      </div>
      <div className="service-container">
        <div className="service">
          <img src={Service1} alt="" />
          <p>Diagnostics of Diseases of Dental Tissues</p>
          <button onClick={()=>navigate("/booking")}>Make Appointment</button>
        </div>
        <div className="service">
          <img src={Service2} alt="" />
          <p>Treatment of Dental Caries. New Practice</p>
          <button onClick={()=>navigate("/booking")}>Make Appointment</button>
        </div>
        <div className="service">
          <img src={Service3} alt="" />
          <p>Use of Modern Treatment Systems</p>
          <button onClick={()=>navigate("/booking")}>Make Appointment</button>
        </div>
        <div className="service">
          <img src={Service4} alt="" />
          <p>Caries Removal with Ultrasound</p>
          <button onClick={()=>navigate("/booking")}>Make Appointment</button>
        </div>
        <div className="service">
          <img src={Service5} alt="" />
          <p>Effective Treatment of the Oral Mucosa</p>
          <button onClick={()=>navigate("/booking")}>Make Appointment</button>
        </div>
        <div className="service">
          <img src={Service6} alt="" />
          <p>Effective Surgical Treatment of Patients</p>
          <button onClick={()=>navigate("/booking")}>Make Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
