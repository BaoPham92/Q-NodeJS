import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

// * STYLE-COMPONENT
import style from './StyledComponents/Nav';

const Nav = () => {

    //nav renders properly on signout. Does not conditionally render on login. useEffect should be triggering a rerender on change to local storage


    // const token = localStorage.getItem('token')

    const [token, setsToken] = useState(localStorage.getItem('token'))

    useEffect(() => {}, [token])

    const resetToken = e => {
        // e.preventDefault();
        localStorage.setItem('token', '');
        setsToken(localStorage.getItem('token'));
    }

    return !!token === false ?
    (
        <>
            <style.ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/members">Members</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </style.ul>
        </>
    )
    :
    (
        <>
            <style.ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/members">Members</NavLink></li>
                <li><NavLink to='/' onClick={resetToken}>Log Out</NavLink></li>
            </style.ul>
        </>
    )
}

export default Nav
