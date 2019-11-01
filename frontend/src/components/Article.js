import React from 'react'

const Article = ({data}) => {

    console.log(data);
    return (
        <div>
            <h1>{data.title}</h1>
            <h3>{data.author}</h3>
            <h4>{data.source.name}</h4>
            <p>{data.content}</p>
        </div>
    )
}

export default Article;



//data.source.name
//data.author
//data.title
//data.content
