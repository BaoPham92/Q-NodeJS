import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './utils/Member/Form';
import styled from 'styled-components';
import {axiosWithAuth} from './utils/axiosAuth.js';

const FormSection = styled.section`
    height: 50vh;
    width: 100vw;
`;

const Login = (props) => {

    // * HISTORY DETAILS
    const history = props.history;
    const path = props.location && props.location.pathname;
    const port = process.env.PORT || 5000;

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginSQLI = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", user)
            .then(response => {
                console.log(response)
                //getting a token or some such
                // localStorage.setItem("token", "tempToken");
            })
            .then(() => {
                history.push("/members")
            })
            .catch(err => {
                localStorage.setItem("token", "tempToken");
                history.push("/members");
                // alert(`There was an error logging in: ${err}`)
            });
            
    };

    // const handleSignup

    const handleSignupSQLI = e => {
        e.preventDefault();

        // axios.post(`http://localhost:5000/register`, user)
        // .then(response => {
        //     console.log(response)
        //     history.push('/login')
        // })
        // .catch(err => alert(console.log(err)))
        alert(`We are no longer accepting new members.`)

        // localStorage.setItem("token","tempToken");
        history.push("/");
    };


    //const handleUpdate
    //if cookie is coming, replace with axiosAuth and change localStorage to sessionStorage
    const handleEdit = e => {
        e.preventDefault();

        axios.put(`localhost:${port}:${user.id}`, user)
            .then(response => {
                console.log(response)
                history.push('/login')
            })
            .catch(err => alert(console.log(err)))
    }

    const handleDelete = e => {
        e.preventDefault();

        axios.delete(`localhost:${port}/${user.id}`, user.id)
            .then(response => history.push('/members'))
            .catch(err => console.log(err))
    }

    return (
        <FormSection>
            <Form
                handleChange={handleChange}
                handleLogin={handleLoginSQLI}
                handleSignup={handleSignupSQLI}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                user={user}
                path={path}
            />
        </FormSection>
    )
}

export default Login;