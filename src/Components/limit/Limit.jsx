import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./Limit.css";
import kyc from "./kyc.png";

function Limit() {
  return (
    <ParallaxProvider>
      <div className="limit">
        <div className="limitLeft">
          Monthly Limit of <span className="color"> ₹3 </span>Lakhs
          <div className="sectxt">
            Complete video KYC to upgrade add money <br></br>limits and unlock
            exciting cashback offers
          </div>
        </div>
        <Parallax translateX={["0px", "-200px"]}>
          <div className="limitRight">
            <img className="kyc" src={kyc} alt="kyc" />
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default Limit;
