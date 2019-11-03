import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Nav from '../components/Nav';
import NavPrivate from '../components/NavPrivate';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            !!localStorage.getItem('token') === false ? (
                <>
                    <Nav {...props} />
                    <Component {...props} />
                 </>
            ) : (
                <>
                    <NavPrivate {...props} />
                    <Component {...props} />
                </>  
            )
            
        )} />
    )

export default PublicRoute