import React from "react";
import "./Home.css";
import Banner from "./banner.jpg";
import Teeth from "./Screenshot 2022-09-29 185837.png";
import Teeth1 from "./Screenshot 2022-09-29 185837.png";
import Teeth2 from "./Screenshot 2022-09-29 193057.png";
import Teeth3 from "./Screenshot 2022-09-29 190048.png";
import About from './About.png'
const Home = () => {
  return (
    <div>
      <img className="image" src={Banner} alt="" />
      <div className="features">

        <div className="card">
          <img src={Teeth} alt="" />
          <h2 className="text-center title">
            Teeth <br /> Whitening
          </h2>
          <p className="text-center mt-2 px-3">
          Whitening is among the most popular dental procedures because it can greatly improve how your teeth look.
          </p>
        </div>

        <div className="card">
          <img src={Teeth1} alt="" />
          <h2 className="text-center title">
            Teeth <br /> Cleaning
          </h2>
          <p className="text-center mt-2 px-3">
          Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries)
          </p>
        </div>

        <div className="card">
          <img src={Teeth2} alt="" />
          <h2 className="text-center title">
          Quality <br /> Brackets
          </h2>
          <p className="text-center mt-2 px-3">
          Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly.
          </p>
        </div>

        <div className="card">
          <img src={Teeth3} alt="" />
          <h2 className="text-center title">
          Certified <br /> Dentists
          </h2>
          <p className="text-center mt-2 px-3">
          Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia.
          </p>
        </div>
      </div>

        <div className="home-about">
            <img src={About} alt="" />
            <div className="details">
                <h3>About Us</h3>
                <h2>Catering to all of your dental needs and desires</h2>
                <p>Our Dental Clinic is dedicated to providing the most up to date general, orthodontic and family dentistry.</p>
                <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and advanced restorative dentistry.</p> <br />
                <button>Learn more</button>
            </div>
        </div>

    </div>
  );
};

export default Home;
