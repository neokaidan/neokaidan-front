import React from "react";
import {NavLink} from "react-router-dom";

import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <div className="footer__nav_col footer__nav_col_left">
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/articles">Статьи</NavLink>
                </div>
                <div className="footer__nav_col">
                    <div className="footer__nav_logo">
                        <NavLink to="/">НЕОКАЙДАН</NavLink>
                        <span>
                            Добро пожаловать <strong>домой</strong>
                        </span>
                    </div>
                    <div className="footer__nav_socials socials">
                        <NavLink to="https://t.me/troopoed" className="socials_tg"></NavLink>
                        <span className="separator" />
                        <NavLink to="https://vk.com/neokaidan" className="socials_vk"></NavLink>
                    </div>
                </div>
                <div className="footer__nav_col footer__nav_col_right">
                    <NavLink to="/about">О нас</NavLink>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
