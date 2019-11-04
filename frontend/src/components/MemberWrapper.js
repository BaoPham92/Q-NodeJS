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

    const [dictators, setDictators] = useState([]);

    const port = process.env.PORT || 5000;

    useEffect(() => {
        Axios.get(`http://localhost:${port}/`)
        .then(dictators => {
            setDictators(dictators)
        })
        .catch(err => console.log(err) )
    },[]);


    return (
    <StyledDiv>
        <StyledH1>Member Directory</StyledH1>
        <MemberContainer>
            {data.map((item, key) => <Members key={key} data={item} />)}
        </MemberContainer>
    </StyledDiv>
    )
}

export default MemberWrapper
