import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

// * STYLE-COMPONENT
import style from './StyledComponents/Nav';

const Nav = (props) => {

    const token = localStorage.getItem('token')

    useEffect(() => {}, [token])

    return !!token === false ?
    (
        <>
            <style.ul>
                <li><NavLink to="/about">About Us</NavLink></li>
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
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/members">Members</NavLink></li>
            </style.ul>
        </>
    )
}

export default Nav
