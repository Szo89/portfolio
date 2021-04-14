import styled from 'styled-components';

export const AboutContainer = styled.div`
    color: #fff;
`;

export const AboutContent = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    justify-content: center;
    margin: 80px 55px;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    text-align: justify;
    @media screen and (min-width: 768px){
        grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2' 'col1'` : `'col1 col2'`) };
    }
`;

export const Column1 = styled.div`
    height: 100%;
    margin-bottom: 15px;
    grid-area: col1;

    @media screen and (min-width: 768px){
        
    }

    @media screen and (min-width: 960px){
        padding-right: 12.5px;
        grid-area: col1;
    }

    @media screen and (min-width: 1024px){
        padding-right: 15px;
        grid-area: col1;
    }    
`;

export const Column2 = styled.div`
    height: 100%;
    margin-bottom: 15px;
    grid-area: col2; 

    

    @media screen and (min-width: 960px){
        padding-left: 12.5px;
        grid-area: col2;
    }

    @media screen and (min-width: 1024px){
        padding-left: 15px;
        grid-area: col2;
    }      
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const Heading = styled.h1`
    align-self: center;
    text-align: center;
    letter-spacing: 4px;
    font-size: 32px;
    margin-bottom: 16px;
    margin-top: 16px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (min-width: 768px){
        font-size: 38px;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    @media screen and (min-width: 1024px){
        font-size: 48px;
        margin-bottom: 30px;
        margin-top: 30px;
    }
`   

export const TopLine = styled.p`
    color: #EE7752;
    font-size: 20px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 14px;
    margin-top: 14px;

    @media screen and (min-width: 768px){
        font-size: 22px;
        margin-bottom: 16px;
        margin-top: 16px;
    }

    @media screen and (min-width: 1024px){
        font-size: 24px;
        margin-bottom: 18px;
        margin-top: 18px;
    }
`;


export const Subtitle = styled.p`
    max-width: 440px;
    margin-top: 30px;
    font-size: 16px;
    line-height: 24px;
`;

export const IconsContainer = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    
`;

export const IconsWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0;
    text-transform: capitalize;
`;

export const IconWrapper = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

export const IconSubtitle = styled.p`
    margin: 0;
    padding: 0;
`


