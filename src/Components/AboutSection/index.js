import React from 'react';
import {AboutContainer, 
    AboutWrapper,
    AboutRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading,
    Subtitle, 
    Column2, 
    IconsContainer,
    IconsWrapper } from './AboutElements';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

const AboutSection = () => {
    return (
        <>
            <AboutContainer id='about'>
                <AboutWrapper>
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
                                <Subtitle>
                                    As a junior developer and a constant learner my scores
                                    are based on junior position (1 to 5).
                                </Subtitle>
                                <IconsContainer>
                                    <IconsWrapper>
                                        <FaIcons.FaHtml5 size={40} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                    </IconsWrapper>
                                    <hr/>
                                    <IconsWrapper>
                                        <FaIcons.FaCss3 size={40} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                    </IconsWrapper>
                                    <hr/>
                                    <IconsWrapper>
                                        <FaIcons.FaBootstrap size={40} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaRegCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaRegCircle size={25} style={{ fill: '#14213D' }}  />
                                    </IconsWrapper>
                                    <hr/>
                                    <IconsWrapper>
                                        <IoIcons.IoLogoJavascript size={40} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaRegCircle size={25} style={{ fill: '#14213D' }}  />
                                    </IconsWrapper>
                                    <hr/>
                                    <IconsWrapper>
                                        <FaIcons.FaReact size={40} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaCircle size={25} style={{ fill: '#14213D' }}  />
                                        <FaIcons.FaRegCircle size={25} style={{ fill: '#14213D' }}  />
                                    </IconsWrapper>
                                    <hr/>
                                </IconsContainer>
                            </TextWrapper>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection
