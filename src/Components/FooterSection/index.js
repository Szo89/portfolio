import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { FooterContainer,
    FooterContent,
    FooterH2, 
    FooterH3,
    FooterP,
    Icons,
    FooterWrapper,
    IconsWrapper,} from './FooterElements';
import { Heading } from '../AboutSection/AboutElements';

const Contact = () => {
    return(
        <FooterContainer id='contact'>
            <Heading>Contact me</Heading>            
                <IconsWrapper >
                    <Icons href="mailto:susanazoliveira@gmail.com">
                        <SiIcons.SiGmail  />
                    </Icons>                
                </IconsWrapper>
                <FooterWrapper>
                    <FooterH2>If you would like to know more about me</FooterH2>
                    <FooterH3>check out my social medias</FooterH3>
                    <IconsWrapper>
                        <Icons href="https://github.com/Szo89" target="_blank" rel="github">
                            <FaIcons.FaGithub />
                        </Icons>
                        <Icons href="https://www.linkedin.com/in/susana-z-de-oliveira-b01621129/" target="_blank"rel="linkedin">
                            <FaIcons.FaLinkedin />
                        </Icons>                        
                    </IconsWrapper>                    
                </FooterWrapper>
                    <FooterContent>
                        <FooterP>Developed by Susana de Oliveira | All rights reserved.</FooterP> 
                    </FooterContent>                  
        </FooterContainer>
    )
  
}

export default Contact;