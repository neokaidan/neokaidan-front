import React from "react";
import Main from "@containers/Main/Main";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
