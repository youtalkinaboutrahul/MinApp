import React from "react";
import "./Payupi.css";
import listicon from "./assets/listIcon.svg";
import upi from "./assets/upiImage.png";

function Payupi() {
  return (
    <div className="paySection">
      <div className="forLeft">
        UPI payments that go<br></br>
        through in <span className="color"> seconds</span>
        <div className="list">
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Scan & Pay
            anywhere with your customised UPI ID
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Choose from a
            range of fun QR themes
          </p>
          <p>
            <img className="icn" src={listicon} alt="icn"></img> Recharge, pay
            bills and shop online, all within the app
          </p>
        </div>
        <div className="upibtn">
          <a href="/">
            <button className="upiBtn" type="button">
              Get your own UPI ID
            </button>
          </a>
        </div>
      </div>

      <div className="right">
        <img className="rightimg" src={upi} alt="svg" />
      </div>
    </div>
  );
}

export default Payupi;
