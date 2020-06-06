import React, { useEffect,useState,lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './components/redux/actions/userActions';
import ProtectedRoute from './ProtectedRoute';

import Profile from './components/User/Profile';
import UserHeader from './components/User/UserHeader/UserHeader';
import Loading from './components/Loading/Loading'
import './app.scss'

// const Login = lazy(() => import('./components/AuthComponents/LoginComponent/Login'));
// const Signup = lazy(() => import('./components/AuthComponents/SignupComponent/Signup'));

import Login from './components/AuthComponents/LoginComponent/Login';
import Signup from './components/AuthComponents/SignupComponent/Signup';

function NotFound(){
    return (
        <div>404 not found</div>
    )
}

function Welcome(){
    return (
        <div>Welcome</div>
    )
}

function App({ checkAuth }) {

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <Suspense fallback={<Loading/>}>
            <BrowserRouter>
                <Switch>

                    <Route exact path="/">
                        <UserHeader/>
                        <Switch>
                            {/* <ProtectedRoute exact path='/' component={Profile} /> */}
                            <Route exact path="/" component={Profile} />
                        </Switch>
                    </Route>

                    
                    <ProtectedRoute exact path='/login' component={Login} />
                    <ProtectedRoute exact path='/signup' component={Signup} />
                    

                    

                    <Route path="*" component={NotFound} />

                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        checkAuth: () => dispatch(checkAuth())
    }
};

export default connect(null, mapDispatchToProps)(App);

