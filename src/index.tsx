import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import "@static/scss/main.scss";

import App from "./app/App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
