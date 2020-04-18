import React from "react";
import techfully from "./techfully.PNG";
import { Link } from "react-router-dom";

const Nav = () => {
  const navstyle = {
    color: "#363738",
    textDecoration: "none"
  };
  return (
    <div className="header">
      <img className="logo" src={techfully} alt="techfully" />
      <ul>
        <Link style={navstyle} to="/">
          <li>HOME</li>
        </Link>

        <Link style={navstyle} to="services">
          <li>SERVICES</li>
        </Link>

        <Link style={navstyle} to="Portfolio">
          <li>PORTFOLIO</li>
        </Link>

        <Link style={navstyle} to="Contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};
export default Nav;
