import React, {FC, ReactNode} from "react";
import {NavLink} from "react-router-dom";
import {v4 as uuid} from "uuid";

import "./Header.scss";

enum NavigationRoute {
    ABOUT = "/about",
    ARTICLES = "/articles",
    DONATIONS = "/dontations",
    COLLECTION = "/collection",
    PODCASTS = "/podcasts",
    PROFILE = "/profile",
    LOGIN = "/login",
    REGISTER = "/register",
}

type NavigationPublic = NavigationRoute.REGISTER | NavigationRoute.LOGIN;

type NavigationPrivate = NavigationRoute.COLLECTION | NavigationRoute.PROFILE;

export const NavigationPublicRouting: Readonly<
    Record<Exclude<NavigationRoute, NavigationPrivate>, string>
> = {
    [NavigationRoute.ARTICLES]: "Статьи",
    [NavigationRoute.PODCASTS]: "Подкасты",
    [NavigationRoute.ABOUT]: "О нас",
    [NavigationRoute.DONATIONS]: "Донаты",
    [NavigationRoute.LOGIN]: "Вход",
    [NavigationRoute.REGISTER]: "Регистрация",
};

export const NavigationPrivateRouting: Readonly<
    Record<Exclude<NavigationRoute, NavigationPublic>, string>
> = {
    [NavigationRoute.ARTICLES]: "Статьи",
    [NavigationRoute.PODCASTS]: "Подкасты",
    [NavigationRoute.ABOUT]: "О нас",
    [NavigationRoute.DONATIONS]: "Донаты",
    [NavigationRoute.COLLECTION]: "Моя коллекция",
    [NavigationRoute.PROFILE]: "Профиль",
};


const Header = () => {
    const isAuthorized = false; // some useAuth hook

    return (
        <header>
            <nav className="navigation">
                <NavLink to="/" className="logo">
                    НЕОКАЙДАН
                </NavLink>
                <ul className="navigation__menu">
                    {isAuthorized
                        ? Object.entries(NavigationPrivateRouting).map(([route, routeName]) => (
                              <li key={uuid()} className="navigation__item">
                                  <NavLink to={route}>{routeName}</NavLink>
                              </li>
                          ))
                        : Object.entries(NavigationPublicRouting).map(([route, routeName]) => (
                              <li key={uuid()} className="navigation__item">
                                  <NavLink to={route}>{routeName}</NavLink>
                              </li>
                          ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
