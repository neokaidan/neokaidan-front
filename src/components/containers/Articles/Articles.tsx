import React from "react";
import {ArticlesFooter, ArticlesGrid, ArticlesHelmet} from "@components/modules/Articles";

import "./Articles.scss";

function Articles() {
    return (
        <section className="articles">
            <div className="articles__container">
                <ArticlesHelmet props="prop" />
                <ArticlesGrid />
                <ArticlesFooter />
            </div>
        </section>
    );
}

export default Articles;
