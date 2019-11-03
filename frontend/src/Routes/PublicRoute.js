import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Nav from '../components/Nav';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            !!localStorage.token === false ? (
                <>
                    <Nav />
                    <Component {...props} />
                </>
            ) : (
                    <Redirect to="/" />
                )
        )} />
    )

export default PublicRoute