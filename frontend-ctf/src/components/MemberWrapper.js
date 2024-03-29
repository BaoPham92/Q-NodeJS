import React, { useEffect, useState } from 'react'
import { data } from '../data';
import styled from 'styled-components';

// * COMPONENT IMPORTS
import Members from './Members';
import axios from 'axios';

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

const MemberWrapper = (props) => {

    const [dictators, setDictators] = useState([]);

    // ? ENV FILE?
    const port = process.env.PORT || 5000;

    useEffect((prev) => {

        // TODO: WHEN EDITING URL TO LOCALHOST:3000/USERS FROM LOCALHOST:3000/USERS/INVALID
        // TODO: THEN PING LOCALHOST:5000 AND RETURN DATA AS A DUMP FOR STUDENTS
        // TODO: CREATE A USER CALLED LOCALHOST:5000

        // TODO: THEN USING THE DISCLOSED CREDS, CREATE ANOTHER PATH / URL TO FLAG 'GET' REQUEST
        // TODO: THE DISCLOSED CREDENTIALS WILL NEED A TOKEN TO PROPERLY NAVIGATE THE FRONT END

        // TODO: OR WE CAN DO WHAT MATT SAID.

        // console.log(prev, props)
        // axios.get(`http://localhost:${port}/`)
        //     .then(dictators => {
        //         setDictators(dictators)
        //     })
        //     .catch(err => console.log(err))
    }, []);


    return (
        <StyledDiv>
            <StyledH1>Member Directory</StyledH1>
            <MemberContainer>
                {data.map((item, key) => <Members {...props} key={key} data={item} />)}
            </MemberContainer>
        </StyledDiv>
    )
}

export default MemberWrapper
