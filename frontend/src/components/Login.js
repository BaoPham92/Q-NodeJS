import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './utils/Member/Form';

const Login = (props) => {
    console.log(props); 
    // * HISTORY DETAILS
    const history = props.history;
    const path = props.location && props.location.pathname;

    const [user, setUser] = useState({
        username: '',
        password: '',
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
        // axios.post('endpoint', user)
        //     .then(response => {
        //         console.log(response)
        //         //getting a token or some such
        //  })
        localStorage.setItem("token","tempToken");
        history.push("/members");
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