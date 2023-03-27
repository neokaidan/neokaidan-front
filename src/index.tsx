import React from "react";
import { createRoot } from "react-dom/client";
import "@static/scss/main.scss";
import App from "@containers/App/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
