import React from 'react'
import { NavLink } from 'react-router-dom';
import history from './utils/browserHistory';

// * STYLE-COMPONENT
import style from './StyledComponents/Nav';

const NavPrivate = (props) => {

        const resetToken = e => {
            e.preventDefault();
            localStorage.setItem('token', '');
            history.push('/');
        }

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
                    <li><NavLink to='/' onClick={resetToken}>Log Out</NavLink></li>
                </style.ul>
            </>
        )
}

export default NavPrivate
