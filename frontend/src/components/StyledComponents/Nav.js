import styled from 'styled-components';

const ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

    background-color: darkred;
    height: 4.5vh;

    & > li {
        display: flex;
        align-items: center;

        list-style-type: none;
        padding: 0 1rem;

        & > a, > a:link, a:visited {
            font-size: 1.6rem;
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