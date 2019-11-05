import React from 'react';
import { Router, Switch } from 'react-router-dom';

// ? ROUTES
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import history from '../components/utils/browserHistory';

// ? COMPONENTS
import Login from '../components/Login';
import Footer from '../components/Footer.js';
import News from '../components/News';
import MemberWrapper from '../components/MemberWrapper.js'
import Landing from '../components/landing/Landing.js';
import Invalid from '../components/Invalid.js'

const AppRouter = () => {
    return (
        <Router history={history}>
            <>
                <Switch>
                    <PublicRoute exact path="/" component={Landing} />
                    <PublicRoute exact path="/login" component={Login} />
                    <PublicRoute exact path="/register" component={Login} />
                    <PublicRoute exact path="/edit" component={Login} />
                    <PrivateRoute exact path="/members" component={MemberWrapper} />
                    <PrivateRoute exact path="/news" component={News} />
                    <PublicRoute exact path="/users" component={MemberWrapper} />
                    <PublicRoute exact path="/users/invalid" component={Invalid} />
                </Switch>
                <Footer />
            </>
        </Router>
    )
}

export default AppRouter