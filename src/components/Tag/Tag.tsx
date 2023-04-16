import React from "react";
import "./Tag.scss";
import { Tag as ITag } from "src/types/Tag";

function Tag({ tag, color }: ITag) {
    const colorClass = color ? `tags__item--${color}` : "";

    return (
        <li className={`tags__item ${colorClass}`}>
            <a href="#" className="tags__link">
                #{tag}
            </a>
        </li>
    );
}

export default Tag;
