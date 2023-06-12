import React from "react";

import PrivateRoute from "./PrivateRoute";
import {useRoutes} from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import ArticlePage from "./ArticlePage/ArticlePage";
import ArticlesPage from "./ArticlesPage/ArticlesPage";

export const RootRouter = () => {
    const routes = [
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/articles",
            element: <ArticlesPage />,
        },
        {
            path: "/article/:id",
            element: <ArticlePage />,
        },
        {
            path: "/podcasts",
            element: <React.Fragment>Подкасты</React.Fragment>,
        },
        {
            path: "/faq",
            element: <React.Fragment>О нас</React.Fragment>,
        },
        {
            path: "/donations",
            element: <React.Fragment>Донаты</React.Fragment>,
        },
        {
            path: "/collection",
            element: <PrivateRoute />,
            children: [
                {
                    path: "",
                    element: <React.Fragment>Моя коллекция</React.Fragment>,
                },
            ],
        },
        {
            path: "/login",
            element: <React.Fragment>Вход</React.Fragment>,
        },
        {
            path: "/register",
            element: <React.Fragment>Регистрация</React.Fragment>,
        },
    ];

    return useRoutes(routes);
};
