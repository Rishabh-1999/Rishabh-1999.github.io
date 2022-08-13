import React from "react";
import ReactDOM from "react-dom/client";

/* Global Styles */
import "./index.css";
import "./scss/index.scss";

/* Routes */
import Routes from "./routes";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);
