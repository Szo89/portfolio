import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS } from 'react-scroll';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top:  ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    font-family: 'Amatic SC', cursive;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    text-align: center;
    padding: 0;

    @media screen and (min-width: 768px){
        grid-template-rows: repeat(6, 80px);
    }
`;

export const SidebarLinks = styled(LinkS)`
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    line-height: 100px;

    &:hover{
        color: #EE7752;
        transition: 0.2s ease-in-out;
    }
`;


