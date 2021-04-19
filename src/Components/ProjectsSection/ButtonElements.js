import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
`

export const Button = styled.button`
    border-radius: 50px;
    width: 80px;
    height: 35px;
    background: #23A6D5;
    color: #fff;
    font-size: 13px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: 10px 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #23D5AB;
    }

    @media screen and (min-width: 400px){
        margin: 10px 25px;
    }

    @media screen and (min-width: 500px){
        margin: 10px 50px;
    }

    @media screen and (min-width: 660px){
        width: 90px;
        height: 40px;
        margin: 10px 90px;
        margin-bottom: 10px;
        font-size: 14px;
    }

    @media screen and (min-width: 888px){
        width: 100px;
        height: 50px;
        margin: 10px 100px;
        margin-bottom: 10px;
        font-size: 16px;
    }

    @media screen and (min-width: 1000px){
        width: 100px;
        height: 50px;
        margin: 10px 30px;
        margin-bottom: 10px;
        font-size: 16px;
    }
`


