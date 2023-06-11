import React from "react";
import { Tag as ITag } from "src/types/models/Tag";

import "./Tag.scss";

function Tag({ tag, color }: ITag) {
    const colorClass = color ? `tag_${color}` : "";

    return (
        <div className={`tag ${colorClass}`}>
            <a href="#" className="tag__link">
                #{tag}
            </a>
        </div>
    );
}

export default Tag;