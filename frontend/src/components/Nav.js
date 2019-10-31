import React from 'react'
import { NavLink } from 'react-router-dom';

// * STYLE-COMPONENT
import style from './StyledComponents/Nav';

const Nav = (props) => {

    return (
        <>
            <style.ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/dictators">News</NavLink></li>
                <li><NavLink to="/dictators">Members</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </style.ul>
        </>
    )
}

export default Nav
