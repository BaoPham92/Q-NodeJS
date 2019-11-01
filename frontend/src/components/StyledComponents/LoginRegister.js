import styled from 'styled-components';


const container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;

`;

const form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid darkred;
    max-width: 50vw;
    margin: 0 auto;
    margin-top: 3vh;
    padding: 2%;
`;

const input = styled.input`
    border: 1px solid black;
    margin: 5%;
    height: 1%;


`;




export default {
    form,
    input,
    container
}