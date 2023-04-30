import React from "react";
import ReactDOM from "react-dom";

/* Main Layout */
import Layout from "./layout";

// Context
import { AppContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Layout />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
