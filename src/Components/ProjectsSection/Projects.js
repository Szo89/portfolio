import React, { useState } from 'react';
import {ProjectsContainer, 
    ProjectsH1, 
    ProjectsP, 
    ProjectsWrapper,
    } from './ProjectsElements';
import {projects} from '../data';
import CardList from './Cards/CardList';
import FilterButton from './Filter/FilterButton';


const allCategories = ['All', ...new Set(projects.map(project => project.category))]

const Projects = () => {
    const [menuCard, SetMenuCard] = useState(projects);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) => {
        if (button === 'All'){
            SetMenuCard(projects);
            return;
        } 
        const filteredData = projects.filter( project => project.category === button);
        SetMenuCard(filteredData)
    }

    const clikedBotton = (button) => {
        const filteredButton = projects.filter( project => project.category === button);
        SetMenuCard(filteredButton)
    }

    const unclikedButton = () => {
        setButtons(clikedBotton)
    }

    return (
        <div>
            <ProjectsContainer id='projects'>
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsP>
                    This are the portfolio I've developer during my courses and also by myself, 
                    select the languages I used and have a look it. Enjoy it!
                </ProjectsP>
                <FilterButton buttons={buttons} filter={filter}/>
                <ProjectsWrapper>                    
                    <CardList menuCard={menuCard} clikedBotton={clikedBotton} unclikedButton={unclikedButton}/>
                </ProjectsWrapper>
            </ProjectsContainer>            
        </div>
    )
}

export default Projects;