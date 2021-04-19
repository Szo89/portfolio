import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const HeroContent = styled.div`
    z-index: -1;
    position: absolute;    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Amatic SC', cursive;
    padding: 80px 55px;

    @media (min-width:960px) {
        justify-content:center;
    }

    @media (min-width:1280px) {
        padding: 80px 185px;
    }
    
    @media (min-width:1450px) {
        padding: 80px 298px;
    }
`;

export const HeroImg = styled.img`
    align-self: flex-start;
    border: 5px solid #E73C7E;
    border-radius: 50%;
    width: 150px;
    height: 150px;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 38px;
    text-align: left;
    max-width: 700px;

    @media screen and (min-width: 768px){
        font-size: 44px;
    }

    @media screen and (min-width: 960px){
        font-size: 48px;
    }

    @media screen and (min-width: 1024px){
        font-size: 52px;
    }

`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 32px;
    text-align: left;
    max-width: 700px;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }

`;

