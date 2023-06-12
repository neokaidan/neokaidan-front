import React, {FC} from "react";
import SearchArticles from "../SearchArticles/SearchArticles";

type ArticlesHelmetProps = {
    props: string;
};

const ArticlesHelmet: FC<ArticlesHelmetProps> = () => {
    return (
        <>
            <h1 className="articles__title">Статьи</h1>
            <SearchArticles />

            <p className="articles__bon-appetit">
                Приятного аппетита! Тому, кто всё прочитал: +1 миска гнили
            </p>
        </>
    );
};

export default ArticlesHelmet;
