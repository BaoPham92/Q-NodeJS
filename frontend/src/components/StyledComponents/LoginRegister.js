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

    background-color: #8b0000;
    border-radius: 0.5rem;
    border: 1px solid darkred;
    border-bottom: 1px solid #ffffff;
    border-left: 0.5px solid #ffffff;
    max-width: 50vw;
    margin: 0 auto;
    margin-top: 3vh;
    padding: 2% 6%;

    & > button {
        margin-top: 1rem;
        padding: 0.1rem 1rem;
    }

    & > input, button {
        border-radius: 1rem;
    }

    & > input::placeholder {
        text-align: center;
    }
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