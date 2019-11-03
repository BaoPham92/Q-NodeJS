import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';



const MemberCard = styled.div`
    display:flex;
    flex-direction:column;
    border: 2px solid black;
    width: 30%;
    align-items: center;
    justify-content: space-between;
    padding: 2%;
    margin: 2%;
    background: #e3e3e3;
`;


const Members = ({data}) => {

    return (
        <MemberCard>
            <h1>{data.first_name} {data.last_name}</h1>
            <h2>{data.country}</h2>
            <h4>{data.email}</h4>
        </MemberCard>
    )
}

export default Members;