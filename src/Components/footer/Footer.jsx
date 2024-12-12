import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="fLeft">
        MinPay focuses on <br></br>financial inclusion of the next generation by
        providing <br></br>UPI & card payments. MinPay Spending Account,
        <br></br> MinX, helps everyone save, spend, earn and <br></br> learn
        everything about money - all <br></br>in one web & app!
        <div className="copy">
          &copy; 2024 MinPay | All rights reserved | Made with{" "}
          <span role="img" aria-label="heart">
            🧡
          </span>
        </div>
      </div>
      <div className="fRight">
        <div className="about">
          <b>Companie</b>
          <br></br>
          <br></br>
          <span className="companytxt">
            About <br></br>Careers <br></br>Contact Us
          </span>
        </div>
        <div className="Resources">
          <b>Resources</b>
          <br></br>
          <br></br>
          <span className="companytxt">Blog</span>
        </div>
        <div className="MinPay">
          <b>MinPay</b>
          <br></br>
          <br></br>
          <span className="companytxt">
            Privacy<br></br>Terms
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
