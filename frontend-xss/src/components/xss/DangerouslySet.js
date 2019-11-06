// function MyComponent() {
//     const title = response.from.backend.title;
//     return <div dangerouslySetInnerHTML={{__html: title}} />; // BAD - potential XSS attack could happened
//   }


// 1) have search bar
// 2) Info entered into the search bar is rendered to screen <---- vector of attack
// 3)

import React, {useState} from 'react'
import queryString from 'query-string';

const DangerouslySet = (props) => {

const [query, setQuery] = useState({
    string:''
});

    const handleQuery = e => {
        // e.preventDefault();
        setQuery({[e.target.name]: e.target.value});
    }

    const handleQuerySubmit = e => {

    }

    return (
        <div>
            <input 
                type="search"
                name="string"
                value={query.string}
                onChange={handleQuery}
                placeholder='Search Members'
            />
            <button>Search</button>
            <div 
            dangerouslySetInnerHTML={
                {__html: `<div ${query.string} />`}
            }
            />   
        </div>
    )
}

export default DangerouslySet
