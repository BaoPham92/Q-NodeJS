import React from 'react';

// * STYLED IMPORTS
import style from '../../StyledComponents/LoginRegister';

// Notes: 
// Need an update version of the form. ternary needs refactor to if-elseif

const Form = ({ handleChange,
    handleLogin,
    user,
    path,
    handleSignup,
    handleEdit,
    handleDelete
}) => {

    // TODO: PROPS FOR DICTATOR DATA (PLACEHOLER VALUES, ETC.)
    // TODO: SWITCH FOR CHECKING TOKEN AUTHENTICATION

    if (path === '/login') {
        return (
            <style.container>
                <h1>Login</h1>
                <style.form onSubmit={handleLogin}>
                    <style.input onChange={handleChange} type='username' name='username' placeholder='Username' value={user.name} autoComplete="off" />
                    <style.input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} autoComplete="off" />
                    <button type='submit'>Submit</button>
                </style.form>
            </style.container>
        )
    } else if (path === '/register') {
        return (
            <style.container>
                <h1>Register</h1>
                <style.form onSubmit={handleSignup}>
                    <style.input onChange={handleChange} type='text' name='username' placeholder='Username' value={user.name} autoComplete="off" />
                    <style.input onChange={handleChange} type='text' name='killcount' placeholder='Kill Count' value={user.killcount} autoComplete="off" />
                    <style.input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} autoComplete="off" />
                    <button type='submit'>Submit</button>
                </style.form>
            </style.container>
        )
    } else if (path === '/edit')
        return (
            <style.container>
                <h1>Edit</h1>
                <style.form onSubmit={handleEdit}>
                    <style.input onChange={handleChange} type='text' name='username' placeholder='Username' value={user.name} autoComplete="off" />
                    <style.input onChange={handleChange} type='text' name='killcount' placeholder='Kill Count' value={user.killcount} autoComplete="off" />
                    <style.input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} autoComplete="off" />
                    <button type='submit'>Submit</button>
                </style.form>
            </style.container>
        )
}
export default Form

// <style.input onChange={handleChange} type='email' name='email' placeholder='Email' value={user.email} />


