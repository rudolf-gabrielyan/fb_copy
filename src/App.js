import React, { useEffect,useState,lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from './components/redux/actions/userActions';
import ProtectedRoute from './ProtectedRoute';
import './app.scss'

import UserHeader from './components/User/UserHeader/UserHeader';
// import Loading from './components/Loading/Loading'
import Login from './components/AuthComponents/LoginComponent/Login';
import Signup from './components/AuthComponents/SignupComponent/Signup';
import NotFound from './components/NotFound/NotFound';

// const Profile = lazy(() => import('./components/User/Profile'));
// const UserProfile = lazy(() => import('./components/User/UserProfile'));
import Profile from './components/User/Profile';
import UserProfile from './components/User/UserProfile'


function App({ checkAuth }) {

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        // <Suspense fallback={<Loading/>}>
            <BrowserRouter>
                <Switch>
                    <ProtectedRoute exact path='/login' component={Login} />
                    <ProtectedRoute exact path='/signup' component={Signup} />

                    <Route to="/">
                        <UserHeader/>
                        <Switch>
                            {/* <ProtectedRoute exact path='/' component={Profile} /> */}
                            <Route exact path="/" component={Profile} />
                            <Route exact path="/profile" component={UserProfile} />
                        </Switch>
                    </Route>

                    <Route path="*" component={NotFound} />

                </Switch>
            </BrowserRouter>
        // </Suspense>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        checkAuth: () => dispatch(checkAuth())
    }
};

export default connect(null, mapDispatchToProps)(App);

