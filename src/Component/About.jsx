import React from "react";
import imageSrc from "../Component/logo/About.jpg";
import money from "../Component/logo/money.png";
import technical from "../Component/logo/tchnical.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={imageSrc} alt="About Image" className="about-image" />
      </div>
      <div className="content-container">
        <h2>About Our Company </h2>
        <h1>Choose The Best IT Service Company</h1>
        <p>
          An IT firm or MSP who keeps your IT running smoothly at all times is
          like a plumber who fixes your pipes; that’s what they are supposed to
          do. Many IT firms struggle.{" "}
        </p>
        <hr />
          <img src={money} alt="" />  <span>Money back gaurntee</span> <img src={technical} alt="" /> <span>technical support</span>
        <hr />
      </div>
    </div>
  );
}
