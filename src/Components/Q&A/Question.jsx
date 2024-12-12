import React from "react";
import "./Question.css";
import qimg from "./Group 46.png";
import Collapsible from "react-collapsible";
import listicon from "./assets/listIcon.svg";
import dropicon from "./assets/drop.png";

function Question() {
  return (
    <div className="QA">
      <div className="qLeft">
        Your questions <span className="color">answered</span>
        <div className="faQaccordion">
          <img className="faQdropicn" src={dropicon} alt="icn" />
          <Collapsible trigger="What is a MinX card?​" open={true}>
            <p className="faQaccpara">
              <img className="faQaccicn" src={listicon} alt="icn" />
              Min is a prepaid RuPay powered smartcard designed{" "}
              <span className="faQparaleft">
                for students for their day-to-day online and offline{" "}
              </span>
              <span className="faQparaleft">payments. It is connected to </span>
              your Min app to track{" "}
              <span className="faQparaleft">spends, set limits and more.</span>
            </p>
          </Collapsible>

          <img className="faQdropicn" src={dropicon} alt="icn" />
          <Collapsible trigger="What are the benefits of a MinX card?​">
            <p className="faQaccpara">
              <img className="faQaccicn" src={listicon} alt="icn" />
              Min RuPay card is lifetime free and offers various{" "}
              <span className="faQparaleft">
                rewards and cashbacks on adding and spending{" "}
              </span>
              <span className="faQparaleft">
                money. You can also get extra offers on your Min{" "}
                <span className="faQparaleft">app too.</span>
              </span>
            </p>
          </Collapsible>
        </div>
      </div>
      <div className="qRight">
        <div className="imgtxt">
          Have a Question ?<br></br>
          <br></br>
          <span className="secimgtxt">
            Check out our answers to <br></br>frequently asked questions
          </span>
          <div className="imgbtn">
            <button className="imgsbtn">View more FAQs</button>
          </div>
        </div>
        <img className="qimg" src={qimg} alt="img" />
      </div>
    </div>
  );
}

export default Question;
