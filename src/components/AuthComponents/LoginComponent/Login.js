import React, { useState } from 'react';
import {Link,useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import AuthHeader from '../AuthHeader';
import AuthFooter from '../AuthFooter';



import './login.scss'

function Login(props, { login, loginErrors }) {
  const history = useHistory();

  const [loginData, setLoginData] = useState({email: '', password: '' });

  const handleLoginDataChange = event => {
    event.persist();
    setLoginData({ ...loginData, [event.target.id]: event.target.value});
  };

  const handleLogin = event => {

    event.preventDefault();

    props.history.push('/');
    return;

    
    login(loginData)
    .then(response => response === 'success' ? history.push('/profile') : null);

  };



  return (
    <div className="loginContainer">
      <AuthHeader />
      <LoginForm handleLogin={handleLogin} />
      <AuthFooter />
    </div>
  );
}


const mapStateToProps = state => {
    return {
        loginErrors: state.user.loginErrors,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(login(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)

