import React from "react";
import Masonry from "react-masonry-css";
import ArticleCard from "../ArticleCard/ArticleCard";
import {Article} from "src/types/models/Article";
import {articles} from "../__mocks__";

import "./ArticlesGrid.scss";

type ArticlesGridProps = {
    cards?: Article[];
};

function ArticlesGrid({cards}: ArticlesGridProps) {
    return (
        <Masonry
            breakpointCols={{default: 3, 1919: 2, 1279: 1}}
            className="masonry cards"
            columnClassName="masonry__column"
        >
            {cards.map((card) => (
                <li key={card.id} className="cards__item">
                    <ArticleCard {...card} />
                </li>
            ))}
        </Masonry>
    );
}

ArticlesGrid.defaultProps = {
    cards: articles,
};

export default ArticlesGrid;
