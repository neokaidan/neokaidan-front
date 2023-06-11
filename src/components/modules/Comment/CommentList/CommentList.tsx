import React from "react";
import {PostComment} from "@components/modules/Comment";

import "./CommentList.scss";
import {Comment} from "@components/basic";

const CommentList = () => {
    return (
        <div className="comment_list">
            <PostComment />
            <ul className="comment_list__items">
                <Comment>
                    <Comment />
                    <Comment />
                    <Comment>
                        <Comment />
                        <Comment />
                    </Comment>
                </Comment>
            </ul>
        </div>
    );
};

export default CommentList;
