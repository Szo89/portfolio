import styled from 'styled-components';
import {Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkS)`
    color: #FCA311;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    width: 3rem;
    height: 3rem;
    padding: 0;
    border: solid 2px #FCA311;
    transition: transform .8s ease-in-out;
  
    &:hover {
        color: #FCA311;
        border: solid 4px #FCA311;
        transform: rotateZ(360deg);
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #FCA311;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    margin: 0 20px;
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #FCA311;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &:active{
        border-bottom: 3px solid #FCA311;
    }

    &:hover{
        border-bottom: 3px solid #FCA311;
    }
`;