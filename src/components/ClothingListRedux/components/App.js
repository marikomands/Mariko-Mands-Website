import React from "react";
import CategoryList from "./CategoryList";
import TypeList from "./TypeList";
import ItemList from "./ItemList";
import "./App.css";

const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Sulis</h2>
      <div className="categoryTypeFlex">
        <CategoryList />
        <div className="itemFlex">
          <ItemList />
        </div>
        <TypeList />
      </div>
    </div>
  );
};

export default App;
