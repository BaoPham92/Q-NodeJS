import React from 'react';
import styled from 'styled-components';

const FootContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #3D3D3D;
    border-bottom: 0.2rem solid #C3C3C3;
    border-top: 0.2rem solid #C3C3C3;
    height: 25vh;
    margin-top: 0 auto;
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
    font-size: 1.2rem;
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
    margin-top:2vh;
    
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
                <StyledImage src={require('./landing/assets/logo.jpg')} alt='logo' />
            </ImgBox>
            <FooterBox>
                <Contact>
                    <p>E-MAIL: info@FIST.org</p>
                    <h4>Fédération Internationale Des
                    Sanctionnés Tyrans </h4>
                </Contact>
                <Address>
                    <Info>Federation of Dictators</Info>
                    <Info>10 Submit Drive</Info>
                    <Info>ICC, The Hague</Info>
                    <Info>800.YOU.RULE</Info>
                </Address>  
            </FooterBox>
            
        </FootContainer>
    )
}

export default Footer;