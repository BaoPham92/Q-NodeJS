import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './utils/Member/Form';
import styled from 'styled-components';

const FormSection = styled.section`
    height: 50vh;
    width: 100vw;
`;

const Login = (props) => {
    // * HISTORY DETAILS
    const history = props.history;
    const path = props.location && props.location.pathname;

    const [user, setUser] = useState({
        username: '',
        password: '',
        killcount:'',
    })

    const port = process.env.PORT || 5000;


    const handleChange = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        // axios.post('endpoint', user)
        //     .then(response => {
        //         console.log(response)
        //         //getting a token or some such
        //         localStorage.setItem("token","tempToken");
        //     })
        //     .then(() => {
        //         history.push("/members")
        //     })
        //      .catch(err => alert(console.log(err)))

        localStorage.setItem("token","tempToken");
        history.push("/members");
    }

    // const handleSignup

    const handleSignup = e => {
        e.preventDefault();

        // axios.post(`localhost:${port}/`, user)
        // .then(response => {
        //     console.log(response)
        //     history.push('/login')
        // })
        // .catch(err => alert(console.log(err)))


        localStorage.setItem("token","tempToken");
        history.push("/members");
    };


    //const handleUpdate

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
        .then(response =>  history.push('/members'))
        .catch(err => console.log(err))
    }

    return (
        <FormSection>
            <Form
                handleChange={handleChange}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                user={user}
                path={path}
            />
        </FormSection>
    )
}

export default Login;