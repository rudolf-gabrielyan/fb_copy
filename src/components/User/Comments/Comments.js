import React from 'react';
import './comments.scss';

import Comment from './Comment';

const Comments = () => {
    return (
        <div className="commentsContainer">

            <div className="comments">
                <Comment />
            </div>

            <div className="writeComment">
                <img src="./fbLogo.png" alt="user image" />
                <textarea placeholder="write a comment" />
            </div>
        </div>
    )
}

export default Comments