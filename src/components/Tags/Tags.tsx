import Tag from "@components/Tag/Tag";
import React from "react";
import "./Tags.scss";
import { Tag as TagType } from "src/types/Tag";

type TagsProps = {
    tags: TagType[];
};

function Tags({ tags }: TagsProps) {
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

export default Tags;
