import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-content: center;
    color: #fff;

    @media screen and (max-width: 500px){
        height: 100vh;
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
        transform: scale(1.5);
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

`