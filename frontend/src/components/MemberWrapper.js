import React from 'react'
import Login from './Login.js';
import { data } from '../data';
import styled from 'styled-components';

// * COMPONENT IMPORTS
import Members from './Members';

// * Member Directory

// ! LOGS
// console.log(data);

const MemberContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin:0 auto;
`;

// const 


const MemberWrapper = () => {

    return (
    <>
        <h1>Members</h1>
        <MemberContainer>
            {
                data.map(dictator => <Members data={dictator} />)
            }
        </MemberContainer>
    </>
    )
}

export default MemberWrapper
