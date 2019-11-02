import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// ? ROUTES
import PrivateRoute from './PrivateRoute';

// ? COMPONENTS
import Login from '../components/Login';
import Nav from '../components/Nav';
import News from '../components/News';
import MemberWrapper from '../components/MemberWrapper.js'
import About from '../components/About'
import Landing from '../components/landing/Landing.js';

const AppRouter = () => {

    // * HISTORY OBJ
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <>
                {/* // * NAV AS THE DEFAULT HEADER
                 */} 
                 <Nav />

                <Switch> 
                    <Route exact path="/" component={Landing} /> 
                    <PrivateRoute exact path="/members" component={MemberWrapper}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Login}/>
                    <PrivateRoute exact path="/news" component={News}/>
                    <Route exact path="/about" component={About} />
                </Switch>
            </>
        </Router>
    )
}

export default AppRouter