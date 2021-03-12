import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    max-width: 1000px;
`

export const Button = styled.button`
    border-radius: 50px;
    width: 120px;
    height: 50px;
    background: #FCA311;
    color: #000;
    font-size: 16px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: 0 35px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #FCA311;
    }

    @media screen and (max-width: 768px){
        width: 100px;
        height: 30px;
        margin: 0 20px;
        margin-bottom: 10px;
        font-size: 14px;
    }
`


