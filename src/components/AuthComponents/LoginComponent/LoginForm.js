import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleLogin }) => {
    return(
        <div className="loginFormContainer">
            <div className="formSection">
                <p>Facebook Login</p>
                <div>
                    <input placeholder="Email or phone number" />
                </div>
                <div>
                    <input placeholder="Password" />
                </div>
                <div>
                    <button onClick={handleLogin} >Login</button>
                </div>
                <div>
                    <Link to="/signup">Registration!</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm