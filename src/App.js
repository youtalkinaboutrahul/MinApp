import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Compaines from "./Components/Companies/Compaines";
import Gift from "./Components/giftSection/Gift";
import Forever from "./Components/giftSection/Forever";
import MinX from "./Components/MinX/MinX";
import Payupi from "./Components/payupi/Payupi";
import Minpay from "./minpaycard/Minpay";
import Love from "./Components/love/Love";
import MainLove from "./Components/love/MainLove";
import Limit from "./Components/limit/Limit";
import Question from "./Components/Q&A/Question";
import Footer from "./Components/footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="homesec">
        <Home />
      </div>
      <div className="companies">
        <Compaines />
      </div>
      <div className="gift">
        <Gift />
      </div>
      <div className="forever">
        <Forever />
      </div>
      <div className="minX">
        <MinX />
      </div>
      <div className="pay">
        <Payupi />
      </div>
      <div className="minpay">
        <Minpay />
      </div>
      <div className="lovepay">
        <Love />
      </div>
      <div className="mlovepay">
        <MainLove />
      </div>
      <div className="limit">
        <Limit />
      </div>
      <div className="question">
        <Question />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
