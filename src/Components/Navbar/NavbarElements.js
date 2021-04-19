import styled from 'styled-components';
import {Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgb(255, 255, 255, 0.5)' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Amatic SC', cursive;
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
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-family: 'Amatic SC', cursive;
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    text-decoration: none;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0;
    border: solid 3px #fff;
    transition: transform .8s ease-in-out;
    box-shadow: 2.5px 5px rgb(231, 60, 126, 0.5);
  
    &:hover {
        color: #E73C7E;
        border: solid 2px #fff;
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
    margin-left: 50px;
    height: 80px;
    font-weight: 600;
    font-size: 1.25rem;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &:active{
        border-bottom: 3px solid #E73C7E;
    }

    &:hover{
        border-bottom: 3px solid #fff;
    }
`;