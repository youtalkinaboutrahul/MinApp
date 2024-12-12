import React from "react";
import "./Minpay.css";
import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile 2.jpg";
import profile3 from "./assets/profile 3.jpg";

const Minpay = () => {
  return (
    <div className="minPay">
      <h2 className="team">Our Team</h2>

      <div className="cardcolor">
        <div className="upc">
          <div className="gradient"></div>
          <img className="profile-down" src={profile1} alt="" />
          <div className="profile-title">Chitra Yadav</div>
          <div className="profile-description">UIUX Designer</div>
          <div className="profile-button">
            <a href="mailto:youtalkinaboutrahul@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
      {/* /////////////////////// */}

      <div className="cardcolor">
        <div className="upc">
          <div className="gradient"></div>
          <img className="profile-down" src={profile2} alt="" />
          <div className="profile-title">Rohit Kuber</div>
          <div className="profile-description">Rohit Kuber</div>
          <div className="profile-button">
            <a href="mailto:youtalkinaboutrahul@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
      {/* /////////////////////// */}
      <div className="cardcolor">
        <div className="upc">
          <div className="gradient"></div>
          <img className="profile-down" src={profile3} alt="" />
          <div className="profile-title">Radhika Yadav</div>
          <div className="profile-description">Founding Team</div>
          <div className="profile-button">
            <a href="mailto:youtalkinaboutrahul@gmail.com">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minpay;
