import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'react-router-dom';
import Form from './utils/Member/Form';

const Login = (props) => {

    // * HISTORY DETAILS
    const history = props.history;
    const path = props.location && props.location.pathname;

    const [user, setUser] = useState({
        name: '',
        password: '',
        email: ''
    })

    const handleChange = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('endpoint', user)
            .then(response => {
                console.log(response)
                //getting a token or some such
            })
    }

    return (
        <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user}
            path={path}
        />
    )
}

export default Login;