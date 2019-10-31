import React from 'react';

// TODO: USE FORM COMPONENT FOR SIGN-UP PARENT COMPONENT AS WELL
const Form = ({ handleChange, handleSubmit, user, path }) => (

    // TODO: SWITCH FOR CHECKING TOKEN AUTHENTICATION
    path === '/' ?
        (
            <>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} />
                    <input onChange={handleChange} type='email' name='email' placeholder='Email' value={user.email} />
                    <button type='submit'>Submit</button>
                </form>
            </>
        )
        :
        (
            <>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='text' name='name' placeholder='Name' value={user.name} />
                    <input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} />
                    <input onChange={handleChange} type='email' name='email' placeholder='Email' value={user.email} />
                    <button type='submit'>Submit</button>
                </form>
            </>
        )
)

export default Form