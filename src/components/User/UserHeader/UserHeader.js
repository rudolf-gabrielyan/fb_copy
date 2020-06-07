import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link} from 'react-router-dom';
import { logout } from '../../redux/actions/userActions';

import HeaderDrDown from './HeaderDrDown';


function PrimarySearchAppBar({ user, logout }) {
  const history = useHistory();

  const[headerDrDownIsOpened, DrDownAction] = useState(false);

  const userLogout = () => {
    logout().then(() => history.push('/login'))
  };

  const openDrDown = () => {
    DrDownAction(!headerDrDownIsOpened);
  }


  return (
    <div className="userHeader">
        <div>
              <Link to="/"><img src="./fbLogo.png" /></Link>
              <div>
                <img src="./images/search.png" /> 
                <input placeholder="Facebook search" />
              </div>
        </div>
        <div>
            <div>
                <img src="./images/home.png" /> 
            </div>
            <div>
                <img src="./images/flag.png" /> 
            </div>
            <div>
                <img src="./images/video.png" />
            </div>
            <div>
                <img src="./images/group.png" />
            </div>
            <div>
                <img src="./images/games.png" />
            </div>
        </div>
        <div>
            <img src="./fbLogo.png" />
            <div>Rudolf Gabrielyan</div>
            <div onClick={openDrDown} ><img src="./images/arrowDown.png" /></div>
            { headerDrDownIsOpened && <HeaderDrDown /> }
        </div>
        
    </div>
  )

  
  
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: data => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar)

