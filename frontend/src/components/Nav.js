import React from 'react'
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <Link>Home</Link>
            <Link>DPR of Korea</Link>
            <Link>Tourism</Link>
            <Link>State Secrets</Link>
            <Link>About</Link>
        </div>
    )
}

export default Nav
