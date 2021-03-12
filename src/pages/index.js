import React, {useState} from 'react';
import Sidebar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import Projects from '../Components/ProjectsSection/Projects';
import Contact from '../Components/FooterSection';



const Home = () => {
    const [isOpen, setIsOpen]  = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />  
            <Projects />
            <Contact />
        </>
    )
}

export default Home