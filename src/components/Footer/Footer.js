import React from "react";
import "./Footer.css";
import img from "./logo_footer.png";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer">

      <div className="d-flex flex-column footerLeft">
        <img src={img} alt="" className="footerImage img-fluid" /> <br />
        <p>
          Privacy Policy / This is a sample website - cmsmasters © {year} / All
          Rights Reserved
        </p>
      </div>

      <div className="d-flex footerRight ">

        <div className="d-flex flex-column ms-5">
            <p>Links</p>
            <p>24/7 Helpline <br />Book an Appointment</p>
        </div>
        <div className="d-flex flex-column ms-4">
            <p>Office</p>
            <p>888 Broadway <br />New York, NY, 18813</p>
        </div>
        <div className="d-flex flex-column ms-4">
            <p>Contact</p>
            <p>info@dentalcare.com <br />123-123-1234</p>
        </div>
        <div className="d-flex flex-column ms-4">
            <p>Open hours</p>
            <p>Monday-Friday: 11am-8pm <br />Weekend: 10am-6pm</p>
        </div>

      </div>

    </div>
  );
};

export default Footer;
