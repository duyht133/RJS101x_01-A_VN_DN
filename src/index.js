import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ConfigureStote } from "./redux/configureStore";

const store = ConfigureStote();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
