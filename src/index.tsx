/**
 * @Owner: Rishabh Anand
 * @Desc: Main Index Component
 **/

import React from "react";
import ReactDOM from "react-dom/client";

/* Components */
/* Main Layout */
import Layout from "./layout";

/* Context */
import { AppContextProvider } from "./context";

const rootElement = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
rootElement.render(
  <React.StrictMode>
    <AppContextProvider>
      <Layout />
    </AppContextProvider>
  </React.StrictMode>
);
