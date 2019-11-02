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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30%
    min-height: 300px;
    border: 1px solid black;

    h4{
        text-align: left-align;
        margin-top: 3%;
    }


    div{
        height: 50%;

        img {
            width:100%;
            max-height: 100%; 
        }
    }

   


`;



const Landing = (props) => {
    console.log(props);

    const buttonClick = e => {
        props.history.push('/register');
    }
    


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
                                    <h1>Join The REAL Squad</h1>
                                    <h2>Join The Largest International Professional Group For Dictators</h2>
                                </ContentDiv>
                                <ButtonDiv>
                                    <Button variant="secondary" onClick={buttonClick}>
                                        Join Today
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
                                <h1>Protect Your Rights</h1>
                                <h2>We Know Your Nuclear Program Is Purely For Educational Purposes</h2>
                            </ContentDiv>
                            <ButtonDiv>
                                <Button variant="secondary" onClick={buttonClick}>
                                    Join Today
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
                                <h1>Attend The Dictator's Summit </h1>
                                <h2>This Year's Theme: How To Herd Your Sheep</h2>
                            </ContentDiv>
                            <ButtonDiv>
                                <Button variant="secondary" onClick={buttonClick}>
                                    Join Today
                                </Button>
                            </ButtonDiv>
                        </StyledDiv> 
                    </Carousel.Item>
                </Carousel> 
            </section>
            <SectionContainer> 
                <BlogCard>
                    <p>Blog</p>
                    <div>
                        <img  src={require('./assets/kim.jpg')}  />
                    </div>
                    <h2>Dress To Oppress</h2>
                    <h4>Because a well-dressed Dictator is an effective Dictator</h4>
                </BlogCard>
                
                <BlogCard>
                    <p>Blog</p>
                    <div>
                        <img src={require('./assets/theyshouldbow.jpg')}  />
                    </div>
                    <h2>7 Ways To Put Subordinates In Their Place</h2>
                    <h4>Spoiler Alert: We Just Repeated "Jail them indefinitely" seven times.</h4>
                </BlogCard>
                
                <BlogCard>
                    <p>Blog</p>
                    <div>
                        <img src={require('./assets/puppetmastercartoon.jpeg')}  />
                    </div>
                    <h2>How To Train Your Sycophants</h2>
                    <h4>We recommend crate training and obedience classes. Also, jail them indefinitely.</h4>
                </BlogCard>
            </SectionContainer>
            
            <SectionContainer>
                <ContentDiv>
                    <h2>You Don't Have To Go It Alone, While You're Going It Alone</h2>
                    <h4>Become a member today, and get a FREE consignment of Chinese-made AK-47's!</h4>
                </ContentDiv>
                <ButtonDiv>
                    <Button variant="secondary" onClick={buttonClick}>
                        Join Today
                    </Button>
                </ButtonDiv> 
            
            
            </SectionContainer>
        </Container>
    )
}

export default Landing
