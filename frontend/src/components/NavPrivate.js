import React from 'react'
import { NavLink } from 'react-router-dom';

// * STYLE-COMPONENT
import style from './StyledComponents/Nav';

const NavPrivate = (props) => {
        return (
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

export default NavPrivate
