import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 50vh;
    display:flex;
    justify-content: center;
    margin-top:20vh;
`;

const Invalid = (props) => {
    console.log(props)
    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <StyledDiv>
            <h1>Invalid Credentials</h1>
        </StyledDiv>
    )
}

export default Invalid
