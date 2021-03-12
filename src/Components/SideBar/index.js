import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} >
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                        <SidebarMenu>
                            <SidebarLinks to='about' onClick={toggle}>
                                About
                            </SidebarLinks>
                            <SidebarLinks to='projects' onClick={toggle}>
                                Projects
                            </SidebarLinks>
                            <SidebarLinks to='contact' onClick={toggle}>
                                Contact
                            </SidebarLinks>
                        </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar