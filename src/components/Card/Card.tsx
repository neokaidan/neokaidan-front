import React from "react";
import "./Card.scss";
import Tags from "@components/Tags/Tags";
import Statistics from "@components/Statistics/Statistics";
import { Article } from "src/types/Article";

function Card({ image, likes, watching, tags, title, text }: Article) {
    return (
        <li className="cards__item">
            <a className="cards__link" href="#">
                <div className="cards__thumb">
                    <picture>
                        <source
                            srcSet={`./images/articles/1x/${image} 1x, ./images/articles/2x/${image} 2x`}
                            type="image/jpeg"
                        />

                        <img
                            className="cards__image"
                            src={`./images/articles/1x/${image}`}
                            alt={title}
                            loading="lazy"
                        />
                    </picture>
                    <div className="cards__overlay">
                        <img src="./icons/hand.svg" alt="click me" width="24" height="31" />
                        Читать
                    </div>
                    <Statistics likes={likes} watching={watching} />
                </div>
            </a>
            <div className="cards__description">
                <Tags tags={tags} />
                <h2 className="cards__title">{title}</h2>
                <p className="cards__text">{text}</p>
            </div>
        </li>
    );
}

export default Card;
