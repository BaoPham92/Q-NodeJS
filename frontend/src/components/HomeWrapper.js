import React from 'react'
import Login from './Login.js';
import {data} from '../../data.js';

// * COMPONENT IMPORTS
import Members from './Members';

// * Member Directory

// ! LOGS
// console.log(data);

const HomeWrapper = () => {
    
    // * map over dictators / members
    return (
        <div>
           {data.map(dictator_ => {
               <Members data={dictator} />
           })} 
        </div>
    )
}

export default HomeWrapper
