import React, { useState, useContext } from "react";
import Nav from "./nav";
import All from "./PortfolioElements/All";
import WebDesign from "./PortfolioElements/WebDesign";
import WebDev from "./PortfolioElements/WebDev";
import MobileDesign from "./PortfolioElements/MobileDesign";
import MobileDev from "./PortfolioElements/MobileDev";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="mes-services">MY WORK</h1>
      <div className="btns">
        {/* <button className="port-btn">ALL</button>
        <button className="port-btn">WEB DESIGN</button>
        <button className="port-btn">WEB DEVELOPMENT</button>
        <button className="port-btn">MOBILE DESIGN</button>
        <button className="port-btn">MOBILE DEVELOPMENT</button> */}
      </div>

      <All />

      {/* <WebDesign />
      <WebDev />
      <MobileDesign />
      <MobileDev /> */}
      <div className="emp"></div>
    </div>
  );
};
export default Portfolio;
