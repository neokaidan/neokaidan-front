import React from "react";
import Tags from "@components/Tags/Tags";
import Statistics from "@components/Statistics/Statistics";
import { Article } from "src/types/Article";
import "./ArticleCard.scss";

function ArticleCard({ image, likes, watching, tags, title, text }: Article) {
    return (
        <div className="card">
            <a className="card__link" href="#">
                <div className="card__thumb">
                    <picture>
                        <source
                            srcSet={`./images/articles/1x/${image} 1x, ./images/articles/2x/${image} 2x`}
                            type="image/jpeg"
                        />

                        <img
                            className="card__image"
                            src={`./images/articles/1x/${image}`}
                            alt={title}
                            loading="lazy"
                        />
                    </picture>
                    <div className="card__overlay">
                        <img src="./icons/hand.svg" alt="click me" width="24" height="31" />
                        Читать
                    </div>
                    <Statistics likes={likes} watching={watching} />
                </div>
            </a>
            <div className="card__description">
                <Tags tags={tags} />
                <h2 className="card__title">
                    <a className="card__title-link" href="#">
                        {title}
                    </a>
                </h2>
                <p className="card__text">{text}</p>
            </div>
        </div>
    );
}

export default ArticleCard;
