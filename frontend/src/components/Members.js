import React from 'react';


const Members = ({data}) => {

    return (
        <>
            <h1>{data.first_name} {data.last_name}</h1>
            <h2>{data.country}</h2>
            <h4>{data.email}</h4>
        </>
    )
}

export default Members;