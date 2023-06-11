import React from "react";
import {TagList} from "@components/modules/Tag";
import {Article} from "src/types/models/Article";
import ArticleStatistics from "@components/modules/Articles/ArticleStatistics/ArticleStatistics";

import "./ArticleCard.scss";

function ArticleCard({image, likes, watching, tags, title, text}: Article) {
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
                    <ArticleStatistics likes={likes} watching={watching} />
                </div>
            </a>
            <div className="card__description">
                <TagList tags={tags} />
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
