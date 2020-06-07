import React from 'react';
import './user.scss';

import LeftAdds from './LeftAdds/LeftAdd';
import Home from './Home/Home';
import RightSection from './RightSection/RightSection';

function UserProfile(props) {
    return (
        <div className="profileContainer">
            <LeftAdds />
            <Home userProfile={true} />
            <RightSection />
           
        </div>
    );
}

export default UserProfile;
