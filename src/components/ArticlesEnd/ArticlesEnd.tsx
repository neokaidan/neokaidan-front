import React from "react";
import "./ArticlesEnd.scss";
function ArticlesEnd() {
    return (
        <div className="end">
            <p className="end__pre-eye">
                А на этом все.
                <br /> Ты просмотрел все статьи
            </p>
            <picture>
                <source srcSet="./images/eye.png 1x, ./images/eye@2x.png 2x" type="image/png" />
                <img className="end__eye" src="./images/eye.png" alt="Eye" loading="lazy" />
            </picture>
            <p className="end__after-eye">...и явно преисполнился в сознании</p>
        </div>
    );
}

export default ArticlesEnd;
