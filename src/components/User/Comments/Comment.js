import React from 'react';
import './comments.scss';

const Comment = () => {
    return (
        <div>
            <img src='./fbLogo.png' alt="user image" />
            <div>
                <p>Armen Ashotyan</p>
                <p>It is my comment</p>
            </div>
        </div>
    )
}

export default Comment