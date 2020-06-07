import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDrDown = () => {

    return (
        <div className="headerDrDown">
            <Link to="/profile"><div>Profile</div></Link>
            <Link to="/login"><div>Logout</div></Link>
        </div>
    )
}

export default HeaderDrDown