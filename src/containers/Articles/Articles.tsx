import React from "react";
import "./Articles.scss";
import ArticlesGrid from "@components/ArticlesGrid/ArticlesGrid";
import SearchArticles from "@components/SearchArticles/SearchArticles";
import EndArticlesNotify from "@components/EndArticlesNotify/EndArticlesNotify";

const articles = [
    {
        id: 1,
        image: "article-1.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "orange" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "One Piece — идеальный сёнэн",
        text: "Статья для «Азбуки» про монументальную мангу Эйтиро Оды.",
    },
    {
        id: 2,
        image: "article-2.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "blue" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "Спираль. Проклятие или благословление?",
        text: "Автор старается понять: плохо ли то, что происходит в манге?",
    },
    {
        id: 3,
        image: "article-3.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "orange" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "Паразит",
        text: "Статья для издательства «Alt Graph» по культовой манге «Паразит».",
    },
    {
        id: 4,
        image: "article-4.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "black" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "«Тетрадь», но кто-то убил Рюка",
        text: "Статья для «Азбуки» про «Тетрадь смерти», где два автора рассказали про основную историю и её интересные дополнения.",
    },
    {
        id: 5,
        image: "article-5.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "purple" },
            { id: 2, tag: "первыйтэг", color: "red" },
            { id: 3, tag: "ещебольшетэгов" },
            { id: 4, tag: "ещебольшетэгов" },
            { id: 5, tag: "ещебольшетэгов" },
        ],
        title: "Сёнен, который ломает шаблоны",
        text: "Рассказываем о том, как сёнен переходит в сейнен. Очень занимательная эволюция жанра.",
    },
    {
        id: 6,
        image: "article-6.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "black" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "Статья про Бензопилу для «Азбуки»",
        text: "В этом посте два автора неокайдана выражают несколько противоположные мнения об одном из самых популярных лиц сегодняшней индустрии манги — Тацуки Фудзимото.",
    },
    {
        id: 7,
        image: "article-1.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "orange" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "One Piece — идеальный сёнэн",
        text: "Статья для «Азбуки» про монументальную мангу Эйтиро Оды.",
    },
    {
        id: 8,
        image: "article-2.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "blue" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "Спираль. Проклятие или благословление?",
        text: "Автор старается понять: плохо ли то, что происходит в манге?",
    },
    {
        id: 9,
        image: "article-3.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "orange" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "Паразит",
        text: "Статья для издательства «Alt Graph» по культовой манге «Паразит».",
    },
    {
        id: 10,
        image: "article-4.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "black" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "«Тетрадь», но кто-то убил Рюка",
        text: "Статья для «Азбуки» про «Тетрадь смерти», где два автора рассказали про основную историю и её интересные дополнения.",
    },
    {
        id: 11,
        image: "article-5.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "purple" },
            { id: 2, tag: "первыйтэг", color: "red" },
            { id: 3, tag: "ещебольшетэгов" },
            { id: 4, tag: "ещебольшетэгов" },
            { id: 5, tag: "ещебольшетэгов" },
        ],
        title: "Сёнен, который ломает шаблоны",
        text: "Рассказываем о том, как сёнен переходит в сейнен. Очень занимательная эволюция жанра.",
    },
    {
        id: 12,
        image: "article-6.jpg",
        likes: 200,
        watching: 4.6,
        tags: [
            { id: 1, tag: "второй тэг", color: "black" },
            { id: 2, tag: "первыйтэг" },
            { id: 3, tag: "ещебольшетэгов" },
        ],
        title: "Статья про Бензопилу для «Азбуки»",
        text: "В этом посте два автора неокайдана выражают несколько противоположные мнения об одном из самых популярных лиц сегодняшней индустрии манги — Тацуки Фудзимото.",
    },
];

function Articles() {
    return (
        <section className="articles">
            <div className="articles__container">
                <h1 className="articles__title">Статьи</h1>

                <SearchArticles />

                <p className="articles__bon-appetit">
                    Приятного аппетита! Тому, кто всё прочитал: +1 миска гнили
                </p>

                <ArticlesGrid cards={articles} />

                <EndArticlesNotify />
            </div>
        </section>
    );
}

export default Articles;
