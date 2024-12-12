import React from "react";
import "./MinLove.css";
import Collapsible from "react-collapsible";
import listicon from "./assets/listIcon.svg";
import dropicon from "./assets/drop.png";
import loveani from "./assets/Animation.gif";

export default function MinLove() {
  return (
    <div className="mainContainer">
      <div className="minLeft">
        <img className="loveani" src={loveani} alt="ani" />
      </div>
      <div className="accordion">
        <img className="dropicn" src={dropicon} alt="icn" />
        <Collapsible trigger="Offers & Cashback​" open={true}>
          <p className="accpara">
            <img className="accicn" src={listicon} alt="icn" />
            Up to 1.5% Cashback on every spend across all{" "}
            <span className="paraleft">
              apps, websites and in-store payments
            </span>
          </p>
          <p className="accpara">
            <img className="accicn" src={listicon} alt="icn" />
            No Cashback on Train Tickets, Insurance, Education{" "}
            <span className="paraleft">Fee, & Government Services*</span>
          </p>
        </Collapsible>

        <img className="dropicn" src={dropicon} alt="icn" />
        <Collapsible trigger="Earnings & Refer​">
          <p className="accpara">
            <img className="accicn" src={listicon} alt="icn" />
            Children can earn pocket money when they{" "}
            <span className="paraleft">
              complete tasks that you set. Incentivise desired
            </span>{" "}
            <span className="paraleft">behaviour with bonus additions</span>
          </p>
          <p className="accpara">
            <img className="accicn" src={listicon} alt="icn" />
            No Cashback on Train Tickets, Insurance, Education{" "}
            <span className="paraleft">Fee, & Government Services*</span>
          </p>
        </Collapsible>
      </div>
    </div>
  );
}
