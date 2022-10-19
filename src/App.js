import React from "react";
import { Router, Route, BrowserRouter } from "react-router-dom";
import AboutMyself from "./components/AboutMyself";
// import Header from "./components/Header";
import GlutenFree from "./components/Baking/GlutenFree";
import WheatBased from "./components/Baking/WheatBased";
import Skills from "./components/Skills";
import ImageSearch from "./components/ImageSearch";

function App() {
  return (
    <div>
      <div className="header">
        <h1>Welcome to Mariko Mands' Website</h1>
      </div>
      <div>
        <BrowserRouter>
          <Route path="/aboutmyself" component={AboutMyself} />
          <Route path="/baking" exact component={WheatBased} />
          <Route path="/baking/gluten-free" component={GlutenFree} />
          <Route path="/image-search" component={ImageSearch} />
          <Route path="/" exact component={Skills} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
