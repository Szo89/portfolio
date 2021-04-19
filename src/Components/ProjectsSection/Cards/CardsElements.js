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
    min-height: 100px;
    max-height: 280px;
    border: solid 5px #23A6D5;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    margin: 20px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (min-width: 760px){
        margin: 30px 20px;
    }

    @media screen and (min-width: 960px){
        width: 220px;
        height: 320px;
    }

    @media screen and (min-width: 1024px){
        margin: 30px 30px;
    }
`
export const CardImg = styled.img`
    height: 130px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 5px;   
`

export const CardH2 = styled.h2`
    font-size: 1.25rem;
    text-align: center;
    color: #23A6D5;
    margin-top: 10px;
    margin-bottom: 10px;
    
`

export const CardP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #23A6D5;
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
    color: #23A6D5;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        color: #23D5AB;
        border-bottom: solid 2px #23D5AB;
    }
`