import React, { useEffect, useState } from 'react';
const DangerouslySet = (props) => {

    useEffect(() => {
        // * THIS IS A WORKING JAVASCRIPT FETCH A USER CAN WRITE OUT IN THE THE HTML FOR THE A TAG TO MAKE A SUCCESSFUL CALL.
        fetch('http://localhost:5000/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(async res => console.log(await res.json()))
            .catch(async err => console.log('SOMETHING', await err.json()))
    }, [])

    return (
        <div>
            {/* // * HERE STUDENTS WILL BE ABLE TO EDIT THE HREF IN DEV TOOLS
                // * SUCH AS CREATING A FETCH CALL
            */}
            <a href={`javascript: alert("TRY USING DEV TOOLS FOR JS!!")`}>HINT! CLICK ME!!!</a>
        </div>
    )
}
export default DangerouslySet

