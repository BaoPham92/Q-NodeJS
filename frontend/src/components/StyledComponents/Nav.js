import styled from 'styled-components';

const ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

    background-color: #3D3D3D;
    border-bottom: 0.2rem solid #C3C3C3;
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