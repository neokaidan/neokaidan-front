import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const authorized = false;
function Header() {
    return (
        <header>
            <>
                <nav className="navigation">
                    <NavLink to="/" className="logo">
                        НЕОКАЙДАН
                    </NavLink>
                    <div className="navigation__menu">
                        <NavLink to="#" className="navigation__link">
                            Статьи
                        </NavLink>
                        <NavLink to="#" className="navigation__link">
                            Подкасты
                        </NavLink>
                        <NavLink to="#" className="navigation__link">
                            О нас
                        </NavLink>
                        <NavLink to="#" className="navigation__link">
                            Донаты
                        </NavLink>

                        {authorized ? (
                            <NavLink to="#" className="navigation__login-link">
                                Профиль
                            </NavLink>
                        ) : (
                            <Fragment>
                                <NavLink to="#" className="navigation__register-link">
                                    Регистрация
                                </NavLink>
                                <NavLink to="#" className="navigation__login-link">
                                    Вход
                                </NavLink>
                            </Fragment>
                        )}
                    </div>
                </nav>
            </>
        </header>
    );
}
export default Header;
