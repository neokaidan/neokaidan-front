import React from "react";
import "./ArticleStatistics.scss";

type ArticleStatisticsProps = {
    likes: number;
    watching: number;
};

function ArticleStatistics({likes, watching}: ArticleStatisticsProps) {
    return (
        <ul className="statistics">
            <li className="statistics__item">
                <img src="./icons/like.svg" width="11" height="11" />
                {likes}
            </li>
            <li className="statistics__item">
                <img src="./icons/watch.svg" width="7" height="10" />
                {watching}к
            </li>
        </ul>
    );
}

export default ArticleStatistics;
