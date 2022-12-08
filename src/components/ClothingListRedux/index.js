import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./Reducers";

const ClothesShopping = () => {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    document.querySelector("#root")
  );
};

export default ClothesShopping;
