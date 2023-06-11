import React, {FC} from "react";

import "./ArticleRatings.scss";

type ArticleRatingsProps = {
    withAction?: boolean;
};

const ArticleRatings: FC<ArticleRatingsProps> = ({withAction}) => {
    return (
        <div className="article_ratings">
            <span className="article_ratings__views">400</span>
            {withAction && (
                <button type="button" className="article_ratings__button">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M40 18.1C40 17.0922 39.6169 16.1256 38.9349 15.413C38.253 14.7004 37.3281 14.3 36.3636 14.3H24.8727L26.6182 5.617C26.6545 5.427 26.6727 5.218 26.6727 5.009C26.6727 4.23 26.3636 3.508 25.8727 2.995L23.9455 1L11.9818 13.502C11.3091 14.205 10.9091 15.155 10.9091 16.2V35.2C10.9091 36.2078 11.2922 37.1744 11.9742 37.887C12.6561 38.5996 13.581 39 14.5455 39H30.9091C32.4182 39 33.7091 38.05 34.2545 36.682L39.7455 23.287C39.9091 22.85 40 22.394 40 21.9V18.1ZM0 39H7.27273V16.2H0V39Z"
                            fill="white"
                        />
                    </svg>
                </button>
            )}
            <span className="article_ratings__likes">200</span>
        </div>
    );
};

ArticleRatings.defaultProps = {
    withAction: false,
};

export default ArticleRatings;
