import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// ? ROUTES
import PrivateRoute from './PrivateRoute';

// ? COMPONENTS
import Login from '../components/Login';
import Nav from '../components/Nav';

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
                    
                    {/* {/members should be private route} */}
                    <Route exact path="/members" />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" />
                    <Route exact path="/news" />
                    <Route exact path="/about" />
                </Switch>
            </>
        </Router>
    )
}

export default AppRouter