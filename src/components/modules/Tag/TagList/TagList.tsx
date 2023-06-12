import React from "react";
import {Tag} from "@components/basic";
import {Tag as TagType} from "src/types/models/Tag";

import "./TagList.scss";

type TagListProps = {
    tags: TagType[];
};

function TagList({tags}: TagListProps) {
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <li key={tag.id} className="tags__item">
                    <Tag {...tag} />
                </li>
            ))}
        </ul>
    );
}

export default TagList;
