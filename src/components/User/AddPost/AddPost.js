import React, { useState } from 'react';
import './addPost.scss';

import AddPostModal from './AddPostModal';

const AddPost = () => {
    const[addPostModal, showHideAddPostModal] = useState(false);

    const handleModal = () => {
        showHideAddPostModal(!addPostModal)
    }

    return (
        <>
            <div className="addPostContainer">
                <div>
                    <img src="./fbLogo.png" />
                    <div onClick={handleModal}>What's new Rudolf</div>
                </div>
                <div>

                </div>
            </div>
            { addPostModal && <AddPostModal closeModal={handleModal} isModalOppened={addPostModal} /> }
        </>
    )
}

export default AddPost