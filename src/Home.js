import React from "react";
import "./App.css";
import webgirl from "./girlweb.PNG";
import Nav from "./nav";
import Cv from "./MonCV.pdf";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1 className="quote">
          I WILL DESIGN AND DEVELOP YOUR WEBSITES AND MOBILE APPS TECH
          <span>fully</span>.
        </h1>
        <button className="hire-btn">
          <a
            className="cnt-btn"
            href="mailto:Mariem.benzineb99@gmail.com?cc=other@domain.com"
          >
            HIRE ME
          </a>
        </button>
        <button className="resume-btn">
          <a className="cv" href={Cv} download>
            SEE MY RESUME
          </a>
        </button>
      </div>
      <Nav />
      <img className="webgirl" src={webgirl} alt="web" />
      <div className="about-me">
        <p className="abt">
          My name is Mariem Benzineb and I am a web and mobile designer and
          developer, my passion for designing and creating led me to making this
          website where I want to show off my coding skills, designing patterns,
          and creative spirit through working on your projects and helping both
          of us to get better in a way or another.
        </p>
      </div>
    </div>
  );
};
export default Home;
