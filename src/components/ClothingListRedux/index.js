import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./Reducers";
import { Link } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import TypeList from "./components/TypeList";
import ItemList from "./components/ItemList";
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
      <div className="imageContainer">
        <Link to="/" style={{ textDecoration: "underline" }}>
          Home
        </Link>
      </div>
    </div>
  );
};

const ClothesShopping = () => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);

export default ClothesShopping;
