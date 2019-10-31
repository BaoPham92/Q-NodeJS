import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Link from 'react-router-dom';




const Login = (props => {
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
        .then( response => {
            console.log(response)
            //getting a token or some such
        })
    }






    return (

        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input onChange={handleChange} type='text' name='name' placeholder='Name' value={user.name} />
            <input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} />
            <input onChange={handleChange} type='email' name='email' placeholder='Email' value={user.email} />
            <button type='submit'>Submit</button>
        </form>











    )





})

export default Login;