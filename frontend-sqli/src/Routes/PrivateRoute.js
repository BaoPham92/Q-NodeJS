import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavPrivate from '../components/NavPrivate';

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            !!localStorage.getItem('token') === true ? (
                <>
                    <NavPrivate />
                    <Component {...props} />
                </>
            ) : (
                    <Redirect to="/login" />
                )
        )} />
    )

export default PrivateRoute

{/* // localStorage.getItem('token') */ }