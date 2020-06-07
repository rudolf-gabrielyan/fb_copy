import React, { useState } from 'react';
import './post.scss';

import Comments from '../Comments/Comments';
import EditPostModal from '../EditPost/EditPostModal';

const Post = (props) => {

    const[editPostModal, actionEditPostModal] = useState(false);

    const { userProfile } = props;

    const openEditPost = () => {
        actionEditPostModal(!editPostModal);
    }

    return (
        <div className="postContainer">
            <div>
                <div>
                    <img src='./fbLogo.png' alt="user image" />
                    <div>
                        <p>Rudolf Gabrielyan</p>
                        <p>few minutes ago</p>
                    </div>
                </div>
                { userProfile && <div>
                    <img onClick={openEditPost} src="./images/edit.png" alt="edit" />
                </div> }
                { editPostModal && <EditPostModal isModalOppened={editPostModal} closeModal={actionEditPostModal} /> }
            </div>
            <div>
                This is my first post!
            </div>
            <div>
                <img src="https://sc01.alicdn.com/kf/HTB1g.WRRXXXXXaHXVXXq6xXFXXXp.jpg" alt="post image" />
            </div>
            <div>
                <div>
                    <img src="./images/likeBlue.png" alt="like count" />
                    <span>3</span>
                </div>
                <div>
                    <span>Comments </span><span>3</span>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <img src="./images/like.png" alt="like" />
                        <p>Like</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="./images/comment.png" alt="comment" />
                        <p>Comment</p>
                    </div>
                </div>

            </div>
            <Comments />

        </div>
    )
}

export default Post;