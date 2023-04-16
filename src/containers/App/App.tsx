import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "@containers/Main/Main";
import SharedLayout from "@containers/SharedLayout/SharedLayout";
import Articles from "@containers/Articles/Articles";

import "./App.scss";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Main />} />
                    <Route path="articles" element={<Articles />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
