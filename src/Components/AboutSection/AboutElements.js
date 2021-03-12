import styled from 'styled-components';

export const AboutContainer = styled.div`
    color: #14213D;
    background: #E5E5E5;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    /* padding: 0 24px; */
    justify-content: center;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2' 'col1'` : `'col1 col2'`) };

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    height: 100%;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;    
`;

export const Column2 = styled.div`
    height: 100%;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;    
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    color: #FCA311;
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 16px;

    @media screen and (max-width: 480px){
        margin-bottom: 14px;
        margin-top: 16px;
    }
`;

export const Heading = styled.h1`
    align-self: center;
    text-align: center;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #14213D;
    margin-bottom: 20px;
    margin-top: 20px;

    @media screen and (max-width: 480px){
        font-size: 32px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    /* color: ${({darkText}) => (darkText ? '#010606' : '#fff')}; */
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
    margin-bottom: 5px;
    margin-top: 10px;
`


