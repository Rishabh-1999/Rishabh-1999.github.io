import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

/* Styles */
import "./SCSS/index.scss";

/* Components */
import Main from "./Main";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
