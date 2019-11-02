import React from 'react';
import {Carousel, Button, Image} from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:80%;
    margin: 0 auto;
`;


const CarouselImg = styled.img`
    height: 400px;
    
`;
const StyledDiv = styled.div`
    display:flex
    background: white;
    border:1px solid black;

`;


const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2%;
    width:60%;
    text-align:center;
    

    h1{
        font-size: 5rem;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2%;
    width:40%;
    text-align:center;
    

    button{
        width: 150px;
        height: 50px;
    }
`;


const SectionContainer = styled.section`
    display:flex;
    justify-content: space-between;
    padding: 2%;
    margin:1% 0 1% 0;
    width:97%;
    border: 1px solid black;
`;

const BlogCard = styled.div`
    width: 30%
    min-height: 300px;
    border: 1px solid black;

    img {
        width:100%;
        max-height: 50%; 
    }


`;



const Landing = (props) => {
    console.log(props);
    


    return (
        <Container> 
            <section>
                <Carousel className='container' >
                        <Carousel.Item>
                            <CarouselImg src={require('./assets/thegangcartoon.jpeg')}
                                className="d-block w-100"
                                alt="Gang of Dictators"
                            />
                            <StyledDiv>
                                <ContentDiv>
                                    <h1>Join The REAL Squad!</h1>
                                    <h2>Join The Largest International Professional Group For Dictators</h2>
                                </ContentDiv>
                                <ButtonDiv>
                                    <Button variant="secondary">
                                        Join 
                                    </Button>
                                </ButtonDiv> 
                            </StyledDiv> 
                        </Carousel.Item>
                        <Carousel.Item>
                        <CarouselImg src={require('./assets/flagandmissles.jpeg')}
                            className="d-block w-100"
                            alt="Gang of Dictators"
                        />
                        <StyledDiv>
                            <ContentDiv>
                                <h1>Protect Your Rights!</h1>
                                <h2>We Know Your Nuclear Program Is Purely For Educational Purposes</h2>
                            </ContentDiv>
                            <ButtonDiv>
                                <Button variant="secondary">
                                    Join 
                                </Button>
                            </ButtonDiv> 
                        </StyledDiv> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImg src={require('./assets/servantleadership.jpeg')}
                            className="d-block w-100"
                            alt="Gang of Dictators"
                        />
                        <StyledDiv>
                            <ContentDiv>
                                <h1>Attend </h1>
                                <h2>Join The Largest International Professional Group For Dictators</h2>
                            </ContentDiv>
                            <ButtonDiv>
                                <Button variant="secondary">
                                    Join 
                                </Button>
                            </ButtonDiv> 
                        </StyledDiv> 
                    </Carousel.Item>
                </Carousel> 
            </section>
            <SectionContainer> 
                <BlogCard>
                    <img  src={require('./assets/kim.jpg')}  />
                    <h2>Dress To Oppress</h2>
                    <h4></h4>
                </BlogCard>
                
                <BlogCard>
                    <img src={require('./assets/vectordespot.jpg')}  />
                    <h2>Force Of Will Is All You Need</h2>
                    <h4></h4>
                </BlogCard>
                
                <BlogCard>
                    <img src={require('./assets/vectordespot.jpg')}  />
                    <h2></h2>
                    <h4></h4>
                </BlogCard>
            </SectionContainer>
            
            <SectionContainer>
            
            
            </SectionContainer>
        </Container>
    )
}

export default Landing
