import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm  = () => {
    return (
        <div className="signupFormContainer">
            <div>
                <p>Facebook helps you stay connected and</p>
                <p>connect with your friends.</p>
                <img src="./images/world.png" />
            </div>
            <div>
                <p>registration</p>
                <p>Quick and easy.</p>

                <div>
                    <input placeholder="Name" />
                    <input placeholder="Surname" />
                </div>
                <div>
                    <input placeholder="Mobile or Email Number the address" />
                </div>
                <div>
                    <input placeholder="Pasword" />
                </div>
                <div>
                    <button>Register</button>
                </div>
                <Link to="/login">Do you have an account?</Link>
            </div>
        </div>
    )
}

export default SignupForm;