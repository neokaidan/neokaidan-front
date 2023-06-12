import React from "react";

import {ArticleFooter, ArticleHelmet} from "@components/modules/Article";
import {CommentList} from "@components/modules/Comment";

import "./Article.scss";

const Article = () => {
    return (
        <main className="article">
            <ArticleHelmet />
            <ArticleFooter />
            <CommentList />
        </main>
    );
};

export default Article;
