import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from './redux/configureStore'
import { Provider  } from "react-redux";
import App from "./components/App";
import "./index.css";

const store = configureStore();

console.log('sd')
render(
  <Provider store = {store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("app")
);
