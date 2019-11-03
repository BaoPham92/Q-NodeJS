import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Nav from '../components/Nav';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            <>
                <Nav />
                <Component {...props} />
            </>
        )} />
    )

export default PublicRoute