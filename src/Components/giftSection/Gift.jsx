import React from "react";
import "./gift.css";
import gift from "./assets/Banking-app.gif";
import listicon from "./assets/listIcon.svg";

function Gift() {
  return (
    <div className="giftSection">
      <img className="giftGif" src={gift} alt="GIF" />
      <div className="giftRight">
        One account &nbsp;
        <span className="color">
          for all your <br></br>spends
        </span>
        <div className="list">
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Get your own
            MinX card & UPI ID
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Enable quick
            payments with your fingerprint/Face ID
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Easily track,
            manage and budget your expenses
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Keep your bank
            statements clean & clutter-free
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gift;
