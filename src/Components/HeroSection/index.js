import React from 'react'
import {HeroContainer, HeroImg, HeroContent, HeroH1, HeroP } from './HeroElements';
import ProfilePic from '../../images/profile.png';

const HeroSection = () => {
    return (
        <div>
            <HeroContainer id='hero'>
                <HeroContent>
                    <HeroImg src={ProfilePic}/>
                    <HeroH1>Hi, my name is Susana</HeroH1>
                    <HeroP>
                        I'm the front-end developer you were looking for.
                    </HeroP>
                </HeroContent>
            </HeroContainer>
            
        </div>
    )
}

export default HeroSection;

