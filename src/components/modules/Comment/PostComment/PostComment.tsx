import React from "react";

import "./PostComment.scss";

const PostComment = () => {
    return (
        <div className="add_comment">
            <input placeholder="Написать комментарий..." className="add_comment__input" />
            <button className="add_comment__button">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.8924 39.7816C4.20373 40.1368 3.5495 40.0587 2.9297 39.5472C2.3099 39.0374 2 38.2941 2 37.3173V27.3933C2 26.7716 2.13773 26.2166 2.4132 25.7282C2.68867 25.2397 3.06743 24.9289 3.5495 24.7957L18.528 20.0002L3.5495 15.2047C3.06743 15.0715 2.68867 14.7607 2.4132 14.2723C2.13773 13.7838 2 13.2288 2 12.6072V2.68317C2 1.70631 2.3099 0.962124 2.9297 0.450605C3.5495 -0.0591379 4.20373 -0.1364 4.8924 0.218822L36.7088 17.5359C37.5696 18.0243 38 18.8458 38 20.0002C38 21.1547 37.5696 21.9761 36.7088 22.4646L4.8924 39.7816Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    );
};

export default PostComment;
