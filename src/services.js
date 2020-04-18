import React from "react";
import Nav from "./nav";
import S1 from "./projects/s1.png";
import S2 from "./projects/s2.png";
import S3 from "./projects/codingg.png";
import S4 from "./projects/s4.png";
import Tel from "./projects/mobile.png";

const Services = () => {
  return (
    <div>
      {/*<div className="services">
        <Nav />
      </div>*/}
      <h1 className="mes-services">MY SERVICES </h1>
      <div className="cards">
        <div className="card">
          <img className="s" src={S3} alt="s1" />
          <h4>WEB DEVELOPMENT</h4>
          <p className="service-desc">
            I will develop the front-end of your website using HTML, CSS and
            Javascript frameworks like ReactJS and jQuery. For the back-end I
            use PHP and MySQL for the database.
          </p>
        </div>

        <div className="card">
          <img className="s" src={Tel} alt="s3" />
          <h4>MOBILE DEVELOPEMENT</h4>
          <p className="service-desc">
            I make static hybrid mobile applications using Flutter and Dart. And
            dynamtic Android native apps using Java, PHP and MySQL.
          </p>
        </div>
        <div className="card">
          <img className="s" src={S2} alt="s2" />
          <h4>WEB AND MOBILE DESIGN</h4>
          <p className="service-desc">
            I design websites and mobile apps using ADOBE XD, I will make sure
            to turn your idea into a expressive design for your brand to grow.
          </p>
        </div>
        <div className="card">
          <img className="s" src={S1} alt="s1" />
          <h4>DESKTOP DEVELOPEMENT</h4>
          <p className="service-desc">
            I create dynamic and static desktop applications using JAVA or C#
            along with other framworks. I use MySQL for the database.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
