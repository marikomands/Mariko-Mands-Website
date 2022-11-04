import React from "react";
// import { Router, Route, BrowserRouter } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="pContainer">
      <Header />
      <p>
        I have studied programming for over a year. I have acquireed the
        knowledge of HTML, CSS, React, React-Redux, React-form, React-Portal,
        and Context System Baesed React.
      </p>

      <Footer className="item" />
    </div>
  );
};

export default Skills;
