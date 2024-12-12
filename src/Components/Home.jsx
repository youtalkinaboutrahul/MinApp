import React from "react";
import "./Home.css";
import image from "../images/mobile-banking.png";
import CountUp from "react-countup";

function Home() {
  return (
    <div className="Home">
      <div className="left">
        Spending account<br></br>for&nbsp;
        <span className="teen">
          Teen, adults,<br></br>everyone
        </span>
        <div className="btn">
          <a href="/">
            <button class="createbtn" type="button">
              Open Account
            </button>
          </a>
          <div className="state">
            <div className="count">
              <span>
                <CountUp start={8700} end={9000} duration={8} />
                <span> + </span>
              </span>
              <span className="secondaryTxt">Account Holders </span>
            </div>

            <div className="count">
              <span>
                <CountUp start={1820} end={2000} duration={8} />
                <span> + </span>
              </span>
              <span className="secondaryTxt">Happy Customers</span>
            </div>
            <div className="count">
              <span>
                <CountUp start={0} end={28} duration={8} />
                <span> + </span>
              </span>
              <span className="secondaryTxt">Award Winning</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="imagediv">
          <img className="image" src={image} alt="Img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
