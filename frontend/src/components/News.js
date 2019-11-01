import React from 'react';
import Article from './Article.js';
import articles from '../articledata.js';
import styled from 'styled-components';

const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
`;

const News = () => {

    return (
        <NewsContainer>
            <h1>News</h1>
            <div>
                {
                    articles.map(article => <Article data={article} />)
                }
            </div>
        </NewsContainer>
    )
}

export default News;