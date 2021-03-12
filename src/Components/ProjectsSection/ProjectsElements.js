import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    
    @media screen and (max-width: 1440px){
        padding: 0 200px;
    }

    @media screen and (max-width: 1300px){
        padding: 0 130px;
    }

    @media screen and (max-width: 1024px){
        padding: 0 40px;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        padding: 0 25px;

    }

    @media screen and (max-width: 768px){
        padding: 0;
    }
`
export const FilterContainer = styled.form`
    align-items: center;
    margin-top: 30px;
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #FCA311;
    margin-bottom: 20px;
    margin-top: 20px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ProjectsP =styled.p`
    font-size: 1.25rem;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 20px;
`

