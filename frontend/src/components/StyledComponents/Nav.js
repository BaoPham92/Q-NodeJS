import styled from 'styled-components';

const ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

    background-color: darkred;

    & > li {
        list-style-type: none;
        padding: 0 1rem;

        & > a, > a:link, a:visited {
            color: white;
            text-decoration: none;
            border: none;
            font-weight: 600;
        }
    }
`

export default {
    ul
}