import React from 'react'
import { NavLink } from 'react-router-dom';

// * STYLE-COMPONENT
import style from './StyledComponents/Nav';

const NavPrivate = (props) => {
        return (
            <>
                <style.ul>
                    <li>
                        <div>
                            <img src = {require('./landing/assets/logo.jpg')} alt = {'logo'} />
                            <p>Fédération Internationale Des
                            Sanctionnés Tyrans </p>
                        </div>
                    </li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/members">Members</NavLink></li>
                    <li><NavLink to='/'>Log Out</NavLink></li>
                </style.ul>
            </>
        )
}

export default NavPrivate
