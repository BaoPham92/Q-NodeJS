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
    align-items: center;
`;

const StyledH1 = styled.h1`
    color: white;
    padding: 2%;
    font-size: 5 rem;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

// const 


const MemberWrapper = () => {

    return (
    <StyledDiv>
        <StyledH1>Members</StyledH1>
        <MemberContainer>
            {data.map(dictator => <Members data={dictator} />)}
        </MemberContainer>
    </StyledDiv>
    )
}

export default MemberWrapper
