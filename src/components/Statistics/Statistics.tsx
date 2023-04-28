import React from "react";
import "./Statistics.scss";

type StatisticsProps = {
    likes: number;
    watching: number;
};

function Statistics({ likes, watching }: StatisticsProps) {
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

export default Statistics;
