import React from "react";
import touch from "@static/images/touch.svg";
import eye from "@static/images/eyeBig.png";

function Main() {
    return (
        <>
            <main className="main">
                <img className="main__img" src={eye} alt="eye"></img>
                <div className="main__text">
                    <h1 className="main__title">НЕОКАЙДАН</h1>
                    <p className="main__subtitle">
                        Братство любителей взрослой манги
                        <span className="main__subtitle-plus"> и темной материи</span>
                    </p>
                    <button className="main__button">
                        К статьям
                        <img src={touch} className="main_touch" alt="touch"></img>
                    </button>
                    <p className="main__welcome">Добро пожаловать домой</p>
                </div>
            </main>
        </>
    );
}

export default Main;
