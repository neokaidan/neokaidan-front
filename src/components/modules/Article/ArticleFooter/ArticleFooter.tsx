import React from "react";
import ArticleRatings from "../ArticleRatings/ArticleRatings";

import "./ArticleFooter.scss";

const ArticleFooter = () => {
    return (
        <div className="article_footer">
            <ArticleRatings withAction />
        </div>
    );
};

export default ArticleFooter;
