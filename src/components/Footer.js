import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <Link to="/aboutmyself">About Myself</Link>
      <Link to="/baking">My hobby</Link>
    </div>
  );
};

export default Footer;
