import React from "react";
import Masonry from "react-masonry-css";
import ArticleCard from "@components/ArticleCard/ArticleCard";
import { Article } from "src/types/Article";
import "./ArticlesGrid.scss";

type ArticlesGridProps = {
    cards: Article[];
};

function ArticlesGrid({ cards }: ArticlesGridProps) {
    return (
        <Masonry
            breakpointCols={{ default: 3, 1919: 2, 1279: 1 }}
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

export default ArticlesGrid;
