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
        <FormSection>
            <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                user={user}
                path={path}
            />
        </FormSection>
    )
}

export default Login;