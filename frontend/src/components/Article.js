import React from 'react'
import styled from 'styled-components';


const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2%;
    margin-bottom:2%;
    width:60%;
    padding: 1%;
    border: 2px solid black;

`;

const Article = ({data}) => {

    console.log(data);
    return (
        <ArticleContainer>
            <h1>{data.title}</h1>
            <h3>{data.author}</h3>
            <h4>{data.source.name}</h4>
            <p>{data.content}</p>
        </ArticleContainer>
    )
}

export default Article;



//data.source.name
//data.author
//data.title
//data.content
