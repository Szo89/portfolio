import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* padding: 0 280px; */
    height: 800px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1440px){
        padding: 0 200px;
    }

    @media screen and (max-width: 1300px){
        padding: 0 130px;
    }

    @media screen and (max-width: 1024px){
        padding: 0 40px;
    }

`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const HeroImg = styled.img`
    align-self: flex-start;
    border: 4px solid #FCA311;
    border-radius: 50%;
    width: 150px;
    height: 150px;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: left;
    max-width: 700px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 48px){
        font-size: 32px;
    }

`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 32px;
    text-align: left;
    max-width: 700px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 48px){
        font-size: 18px;
    }
`;

