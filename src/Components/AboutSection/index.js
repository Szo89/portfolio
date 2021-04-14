import React from 'react';
import {AboutContainer, 
    AboutContent,
    AboutRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading,
    Subtitle, 
    Column2, 
    IconsContainer,
    IconWrapper,
    IconSubtitle,
    IconsWrapper } from './AboutElements';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

const AboutSection = () => {
    return (
        <>
            <AboutContainer id='about'>
                <AboutContent>
                    <Heading >About me</Heading>
                    <AboutRow >                    
                        <Column1>
                        <TextWrapper>
                            <TopLine>Little bit about me...</TopLine>                            
                            <Subtitle>
                                I've been studying to become a front-end 
                                developer for a year now. My background is 
                                architecture which I found that being a 
                                developer is also a way to put my 
                                criativite to work. 
                            </Subtitle>
                            <Subtitle>
                                Since I took this path I've become passioned 
                                about responsive website and a believer in 
                                mobile-first approach. I have got a certificate 
                                Skill-Crush, and also I've took the zero-to-master 
                                course on Udemy academy.
                            </Subtitle>
                            <Subtitle>
                                My hobbies are drawing, listen music and discover 
                                new places and food.
                            </Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <TopLine>My skills</TopLine>                            
                                {/* <Subtitle>
                                    As a junior developer and a constant learner my scores
                                    are based on junior position (1 to 5).
                                </Subtitle> */}
                                <IconsContainer>
                                    <IconsWrapper>
                                        <IconWrapper>
                                            <FaIcons.FaHtml5 size={30} style={{ fill: '#fff' }}  />
                                            <IconSubtitle>Html 5</IconSubtitle>
                                        </IconWrapper>                                                                                
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                    </IconsWrapper>
                                    <IconsWrapper>
                                        <IconWrapper>
                                            <FaIcons.FaCss3 size={30} style={{ fill: '#fff' }}  />
                                            <IconSubtitle>CSS 3</IconSubtitle>
                                        </IconWrapper>                                        
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                    </IconsWrapper>
                                    <IconsWrapper>
                                        <IconWrapper>
                                            <FaIcons.FaBootstrap size={30} style={{ fill: '#fff' }}  />
                                            <IconSubtitle>BootStrap</IconSubtitle>
                                        </IconWrapper>                                        
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaRegCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaRegCircle size={20} style={{ fill: '#fff' }}  />
                                    </IconsWrapper>
                                    <IconsWrapper>
                                        <IconWrapper>
                                            <IoIcons.IoLogoJavascript size={30} style={{ fill: '#fff' }}  />
                                            <IconSubtitle>JavaScript</IconSubtitle>
                                        </IconWrapper>                                        
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaRegCircle size={20} style={{ fill: '#fff' }}  />
                                    </IconsWrapper>
                                    <IconsWrapper>
                                        <IconWrapper>
                                            <FaIcons.FaReact size={30} style={{ fill: '#fff' }}  />
                                            <IconSubtitle>React</IconSubtitle>
                                        </IconWrapper>                                        
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaCircle size={20} style={{ fill: '#fff' }}  />
                                        <FaIcons.FaRegCircle size={20} style={{ fill: '#fff' }}  />
                                    </IconsWrapper>
                                </IconsContainer>
                            </TextWrapper>
                        </Column2>
                    </AboutRow>
                </AboutContent>
            </AboutContainer>
        </>
    )
}

export default AboutSection
