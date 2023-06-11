import React, {FC, ReactNode, useState} from "react";

type CommentProps = {
    children?: ReactNode;
};

import "./Comment.scss";

const Comment: FC<CommentProps> = ({children}) => {
    const [unfolded, setUnfolded] = useState(false);

    return (
        <div className="comment_wrapper">
            <div className="comment">
                <span className="comment_author_avatar" />
                <span className="comment_author">Рома рома роман</span>
                <span className="comment_content">Анимешники клоуны</span>
                <div className="comment_actions">
                    <span className="comment_date">1 авг 2022</span>
                    <button className="comment_button">Ответить</button>
                </div>
            </div>
            {children && (
                <div className="comment_responses">
                    <button onClick={() => setUnfolded((old) => !old)} />
                    {unfolded && children}
                </div>
            )}
        </div>
    );
};

Comment.defaultProps = {
    children: null,
};

export default Comment;
