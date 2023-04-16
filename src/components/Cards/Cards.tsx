import Card from "@components/Card/Card";
import React from "react";
import Masonry from "react-masonry-css";
import "./Cards.scss";
import { Article } from "src/types/Article";

interface CardsProps {
    cards: Article[];
}

function Cards({ cards }: CardsProps) {
    return (
        <Masonry
            breakpointCols={{ default: 3, 1919: 1 }}
            className="masonry cards"
            columnClassName="masonry__column"
            as="ul"
        >
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </Masonry>
    );
}

export default Cards;
