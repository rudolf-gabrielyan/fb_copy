import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './signup.scss';

import SignupForm from './SignupForm';
import AuthHeader from '../AuthHeader';
import AuthFooter from '../AuthFooter';



function Signup() {

  const history = useHistory();

  const [SignupData, setSignupData] = useState({full_name: '', email: '', password: '' });
  const [signupErrors, setSignupErrors] = useState({ full_name: '', email: '', password: '' });


  const handleSignupDataChange = event => {
    event.persist();
    setSignupData({ ...SignupData, [event.target.id]: event.target.value});
  };

  const handleSubmite = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8000/api/signup', SignupData)
    .then( response => {
        history.push('/login');
    })
    .catch( error => {
        setSignupErrors(error.response.data);
    } )
  }


  return (
    <div className="signupContainer">
      <AuthHeader />
      <SignupForm />
      <AuthFooter />
    </div>
  );
}

export default Signup
