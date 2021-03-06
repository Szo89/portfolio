import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 100%;
`

export const ProjectsContent = styled.div`
    padding: 80px 55px;
    justify-content: center; 
    align-items: center;
    text-align: center;

    @media (min-width:960px) {
        padding: 80px 120px;
    }

    @media (min-width:1280px) {
        padding: 0;
        margin: 80px 160px;
    }
    
    @media (min-width:1350px) {
        margin: 80px 235px;
    }

    @media (min-width:1440px) {
        margin: 80px 298px;
    }

`

export const ProjectsWrapper = styled.div`
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 50px;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`
export const FilterContainer = styled.form`
    align-items: center;
    margin-top: 30px;
`

export const ProjectsP =styled.p`
    font-size: 1.25rem;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 25px;
`

