import React, {useEffect, useState} from 'react'
import Login from './Login.js';
import { data } from '../data';
import styled from 'styled-components';

// * COMPONENT IMPORTS
import Members from './Members';
import Axios from 'axios';

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
    color: Black;
    padding: 2%;
    font-size: 5 rem;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const MemberWrapper = () => {

    useEffect(() => {
        Axios.get()

    })


    return (
    <StyledDiv>
        <StyledH1>Member Directory</StyledH1>
        <MemberContainer>
            {data.map((dictator, key) => <Members key={key} data={dictator} />)}
        </MemberContainer>
    </StyledDiv>
    )
}

export default MemberWrapper
