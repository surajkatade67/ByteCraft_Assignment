import React from "react";
import "./Middle.css";
import "./LogoSection.css";
import './Logo1.css';
import Navbar from "./Navbar";
import logo1 from "../Component/logo/logo1.png";
import logo2 from "../Component/logo/logo2.png";
import logo3 from "../Component/logo/logo3.png";
import logo4 from "../Component/logo/logo4.png";
import logo5 from "../Component/logo/logo5.png";
import logo6 from "../Component/logo/logo6.png";
import logo7 from "../Component/logo/logo7.png";
import logo8 from "../Component/logo/logo8.png";
import logo9 from "../Component/logo/logo9.png";

export default function Middlie() {
  return (
    <>
      <Navbar />
      <div className="middlie">
        <div className="content">
          <h1 className="heading">We are bussiness solution</h1>
          <h2 className="subheading">
            Prosper in this volatile market funding
          </h2>
          <p className="description">
            we place you at the center of international networks to advance your
            stratigic interest
          </p>
          <button className="action-button">Our team </button>
        </div>
      </div>
      <div className="logo-section">
        <div className="logo-item">
          <img src={logo1} alt="Logo 1" className="logo-image" />
          <h2 className="logo-heading">UI/UX Design services </h2>
        </div>
        <div className="logo-item">
          <img src={logo2} alt="Logo 2" className="logo-image" />
          <h2 className="logo-heading">Business conusltation</h2>
        </div>
        <div className="logo-item">
          <img src={logo3} alt="Logo 3" className="logo-image" />
          <h2 className="logo-heading">Website developement</h2>
        </div>
        <div className="logo-item">
          <img src={logo4} alt="Logo 4" className="logo-image" />
          <h2 className="logo-heading">Support management</h2>
        </div>
        <div className="logo-item">
          <img src={logo5} alt="Logo 5" className="logo-image" />
          <h2 className="logo-heading">Market Reserche</h2>
        </div>
      </div>

      <div className="logo1">
        <div className="left">
            <h1>Join over +15,000 happy clients!</h1>
        </div>
        <div className="right">
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
          <img src={logo8} alt="" />
          <img src={logo9} alt="" />
        </div>
      </div>
    </>
  );
}
