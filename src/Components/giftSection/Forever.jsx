import React from "react";
import "./Forever.css";
import listicon from "./assets/listIcon.svg";
import card from "./assets/Credit Card.gif";

function Forever() {
  return (
    <div className="foreverSection">
      <div className="forLeft">
        <span className="color">
          Your first and forever account<br></br>
        </span>
        account
        <div className="list">
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Make payments
            without a bank account
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Get a
            customised UPI & card as a teen
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Open for
            everyone ages 11+
          </p>
        </div>
      </div>
      <div className="right">
        <img className="cardGif" src={card} alt="GIF" />
      </div>
    </div>
  );
}

export default Forever;
