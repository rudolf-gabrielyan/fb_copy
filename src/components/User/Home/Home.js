import React from 'react';
import './home.scss';

import AddPost from '../AddPost/AddPost';
import Post from '../Post/Post';

const Home = (props) => {

    const { userProfile } = props;
    return (
        <div className="homeContainer">
            { userProfile && <AddPost /> }
            <Post userProfile={userProfile} />
            <Post userProfile={userProfile} />
        </div>
    )
}

export default Home;