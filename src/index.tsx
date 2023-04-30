import React from "react";
import { createRoot } from "react-dom/client";
import App from "@containers/App/App";
import "@static/scss/main.scss";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
