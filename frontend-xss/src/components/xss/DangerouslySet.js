import React, { useEffect, useState } from 'react';
import axios from 'axios';
// TODO: TEST HITTING AN ENDPOINT AND RETURN DATA.
const DangerouslySet = (props) => {

    useEffect(() => {
        axios.get('http://localhost:5000/api/projects')
            .then(res => console.log(res))
            .catch(err => console.log('SOMETHING', err))
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

