import React from 'react';
import styled from 'styled-components';
import {Image} from 'react-bootstrap';


const FootContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #3D3D3D;
    border-bottom: 0.2rem solid #C3C3C3;
    border-top: 0.2rem solid #C3C3C3;
    height: 24vh;
    margin: 0;
    padding: 1rem;
    color: white;
`;

const Address = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`;
const Info = styled.p`
    line-height: 1;
    font-size: .8rem;
`;

const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:30%;
    
`;
const StyledImage = styled.img`
    width: 150px;
    border-radius: 100px;
`;
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    font-size: .9rem;
    
`;

const FooterBox = styled.div`
    display:flex;
    width: 70%;
    justify-content: center;
    justify-content: space-around;
`;




const Footer = () => {

    return (
        <FootContainer>
            <ImgBox>
                <StyledImage src = {require('./landing/assets/logo.jpg')} alt = 'logo' />
            </ImgBox>
            <FooterBox>
            <Address>
                <Info>Federation of Dictators</Info>
                <Info>10 Submit Drive</Info>
                <Info>ICC, The Hague</Info>
                <Info>800.YOU.RULE</Info>
            </Address>  
            <Contact>
                <p>E-MAIL: info@federationofdictators.org</p>
                <h3>The Federation Of Dictators</h3>
            </Contact>
            </FooterBox>
            
        </FootContainer>
    )
}

export default Footer;