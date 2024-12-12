import React from "react";
import "./MinX.css";
import card from "./assets/Card Secure.png";
import listicon from "./assets/listIcon.svg";

function MinX() {
  return (
    <div className="minxSection">
      <img className="minicon" src={card} alt="card" />
      <div className="minxRight">
        min<span className="color">X</span>card
        <div className="list">
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Numberless card
            that keeps your info safe
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Quick and
            secure payments with Tap & Pay
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Design your own
            card with doodles
          </p>
        </div>
      </div>
    </div>
  );
}

export default MinX;
