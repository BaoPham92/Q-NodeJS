import React from 'react';

// * STYLED IMPORTS
import style from '../../StyledComponents/LoginRegister';

// TODO: USE FORM COMPONENT FOR SIGN-UP PARENT COMPONENT AS WELL
const Form = ({ handleChange, handleSubmit, user, path }) => (

    // TODO: SWITCH FOR CHECKING TOKEN AUTHENTICATION
    path === '/login' ?
        (
            <style.container>
                <h1>Login</h1>
                <style.form onSubmit={handleSubmit}>
                    <style.input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} />
                    <style.input onChange={handleChange} type='email' name='email' placeholder='Email' value={user.email} />
                    <button type='submit'>Submit</button>
                </style.form>
            </style.container> 
        )
        :
        (
            <style.container>
                <h1>Register</h1>
                <style.form onSubmit={handleSubmit}>
                    <style.input onChange={handleChange} type='text' name='name' placeholder='Name' value={user.name} />
                    <style.input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} />
                    <style.input onChange={handleChange} type='email' name='email' placeholder='Email' value={user.email} />
                    <button type='submit'>Submit</button>
                </style.form>
            </style.container>
        )
)

export default Form