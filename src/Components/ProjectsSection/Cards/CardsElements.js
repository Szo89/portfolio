import styled from 'styled-components';

export const Card = styled.div`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`

export const CardContainer = styled.div`
    cursor: pointer;
`

export const CardWrapper = styled.div`
    width: 280px;
    height: 380px;
    border: solid 3px #FCA311;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    margin: 30px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 760px){
        margin: 20px
    }

    @media screen and (max-width: 480px){
        max-height: 120px;
        min-height: 280px;
        margin: 10 0;
    }
`
export const CardImg = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 5px;   
`

export const CardH2 = styled.h2`
    font-size: 1.25rem;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const CardP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const Button = styled.a`
    text-decoration: none;
    color: #FCA311;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        color: #FCA311;
        border-bottom: solid 2px #FCA311;
        transform: rotateZ(360deg);
    }
`