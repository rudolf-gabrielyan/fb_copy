import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
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
                    <button>Input</button>
                </div>
                <div>
                    <Link to="/signup">Registration!</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm