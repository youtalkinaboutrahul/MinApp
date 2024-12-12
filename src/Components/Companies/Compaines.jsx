import React from "react";
import "./Compaines.css";
import Marquee from "react-fast-marquee";
import svg1 from "../images/american-express.svg";
import svg2 from "../images/discover-network.svg";
import svg3 from "../images/maestro.svg";
import svg4 from "../images/mastercard.svg";
import svg5 from "../images/paypal.svg";
import svg6 from "../images/skrill.svg";
import svg7 from "../images/visa.svg";
function Compaines() {
  return (
    <div className="companies">
      <h3>Our Payment Partners</h3>
      <div>
        <Marquee pauseOnHover>
          <div className="svg">
            <img src={svg1} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg2} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg3} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg4} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg5} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg6} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg7} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg1} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg4} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg3} alt=""></img>
          </div>
          <div className="svg">
            <img src={svg7} alt=""></img>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Compaines;
