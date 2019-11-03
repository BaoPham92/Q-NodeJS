import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// ? ROUTES
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// ? COMPONENTS
import Login from '../components/Login';
import Footer from '../components/Footer.js';
import News from '../components/News';
import MemberWrapper from '../components/MemberWrapper.js'
import Landing from '../components/landing/Landing.js';

// * HISTORY OBJ
const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <>
                <Switch>
                    <PublicRoute exact path="/" component={Landing} />
                    <PublicRoute exact path="/login" component={Login} />
                    <PublicRoute exact path="/register" component={Login} />
                    <PrivateRoute exact path="/members" component={MemberWrapper} />
                    <PrivateRoute exact path="/news" component={News} />
                </Switch>
                <Footer />
            </>
        </Router>
    )
}

export default AppRouter