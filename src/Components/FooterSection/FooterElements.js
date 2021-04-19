import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
    color: #fff;
    padding: 80px 55px;

    @media (min-width:1280px) {
        height: 90vh;
        padding: 0;
        margin-top: 80px;
    }
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
`

export const Icons = styled.a`
    margin: 30px 35px;
    color: #fff;
    font-size: 3rem;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.3);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        color: #EE7752;
    }
`
export const FooterWrapper = styled.div`
    margin-bottom: 10px;
`

export const FooterH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`

export const FooterH3 = styled.h3`
    font-size: 1.2rem;
`
export const FooterContent = styled.div`    
    width: 100%;
`

export const FooterP = styled.p`
    font-family: 'Josefin Slab', serif;
    color: #fff;
    font-size: 16px;
    margin-top:100px;
    margin-bottom:0;

    @media (min-width:1280px) {
        margin-top: 90px;
    }
`