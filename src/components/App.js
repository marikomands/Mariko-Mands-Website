import React from "react";
import { Router, Route, BrowserRouter } from "react-router-dom";
import AboutMyself from "./AboutMyself";
// import Header from "./Header";
import GlutenFree from "./Baking/GlutenFree";
import WheatBased from "./Baking/WheatBased";
import Skills from "./Skills";

function App() {
  return (
    <div>
      <h1>Welcome to Mariko Mands' Website</h1>
      <BrowserRouter>
        <div>
          {/* <Route path="/mywork" component ={Hooks} */}
          <Route path="/aboutmyself" component={AboutMyself} />
          <Route path="/" exact component={Skills} />
          <Route path="/baking" exact component={WheatBased} />
          <Route path="/baking/gluten-free" component={GlutenFree} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
