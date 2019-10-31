import React from 'react';

// TODO: USE FORM COMPONENT FOR SIGN-UP PARENT COMPONENT AS WELL
const Form = ({ handleChange, handleSubmit, user }) => (
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input onChange={handleChange} type='text' name='name' placeholder='Name' value={user.name} />
        <input onChange={handleChange} type='password' name='password' placeholder='Password' value={user.password} />
        <input onChange={handleChange} type='email' name='email' placeholder='Email' value={user.email} />
        <button type='submit'>Submit</button>
    </form>
)

export default Form