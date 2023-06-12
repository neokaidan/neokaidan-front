import React from "react";

import {ArticleRatings} from "@components/modules/Article";
// import {TagList} from "@components/modules/Tag";

import "./ArticleHelmet.scss";

// const tags = [
//     {tag: "shonen", color: "000000"},
//     {tag: "mystery", color: "000000"},
//     {tag: "thriller", color: "000000"},
//     {tag: "drama", color: "000000"},
//     {tag: "moe", color: "000000"},
// ];

const ArticleHelmet = () => {
    return (
        <section className="article_helmet">
            {/* <TagList tags={tags} /> */}
            <ArticleRatings withAction />
        </section>
    );
};

export default ArticleHelmet;
