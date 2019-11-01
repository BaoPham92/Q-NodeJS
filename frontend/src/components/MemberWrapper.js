import React from 'react'
import Login from './Login.js';
import { data } from '../data';

// * COMPONENT IMPORTS
import Members from './Members';

// * Member Directory

// ! LOGS
// console.log(data);

const MemberWrapper = () => {

    return (
        <div>
            {
                data.map(dictator => <Members data={dictator} />)
            }
        </div>
    )
}

export default MemberWrapper
