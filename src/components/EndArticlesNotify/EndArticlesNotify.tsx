import React from "react";
import "./EndArticlesNotify.scss";

function EndArticlesNotify() {
    return (
        <div className="end-articles-notify">
            <p className="end-articles-notify__pre-eye">
                А на этом все.
                <br /> Ты просмотрел все статьи
            </p>
            <picture>
                <source srcSet="./images/eye.png 1x, ./images/eye@2x.png 2x" type="image/png" />
                <img
                    className="end-articles-notify__eye"
                    src="./images/eye.png"
                    alt="Eye"
                    loading="lazy"
                />
            </picture>
            <p className="end-articles-notify__after-eye">...и явно преисполнился в сознании</p>
        </div>
    );
}

export default EndArticlesNotify;
