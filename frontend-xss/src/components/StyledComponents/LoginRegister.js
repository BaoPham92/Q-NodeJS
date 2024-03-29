import styled from 'styled-components';


const container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    color: white;

    h1{
        color: black;
    }
`;

const form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #3D3D3D;
    border-radius: 0.5rem;
    border: 1px solid darkred;
    border-bottom: 0.2rem solid #C3C3C3;
    border-left: 0.15rem solid #C3C3C3;
    width: 30vw;
    margin: 0 auto;
    margin-top: 3vh;
    padding: 2% 6%;

    & > button {
        margin-top: 1rem;
        padding: 0.1rem 1rem;
        width: 10em;
        height: 1.5em;
    }

    & > input, button {
        border-radius: 0.5rem;
    }

    & > input {
        border-radius: 0.5rem;
        width: 15em;
        height: 2em;
    }

    & > input::placeholder {
        text-align: center;
    }
`;

const input = styled.input`
    border: 1px solid black;
    margin: 3%;
    height: 1%;
`;

export default {
    form,
    input,
    container
}