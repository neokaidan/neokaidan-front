import Tag from "@components/Tag/Tag";
import React from "react";
import "./Tags.scss";
import { Tag as ITag } from "src/types/Tag";

interface TagsProps {
    tags: ITag[];
}

function Tags({ tags }: TagsProps) {
    return (
        <ul className="tags">
            {tags.map((tag) => (
                <Tag key={tag.id} {...tag} />
            ))}
        </ul>
    );
}

export default Tags;
