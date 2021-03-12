


import { Card, CardContainer, CardWrapper, CardImg, CardH2, CardP, ButtonContainer, Button} from './CardsElements';


const CardList = ({menuCard}) =>{  
    
    return (
        <Card>
            {
                menuCard.map( (project)=> {
                    return(
                        <CardContainer key={project.id}>
                            <CardWrapper>
                                <CardImg src={project.image} />
                                <CardH2>{project.name}</CardH2>
                                <CardP>{project.languages}</CardP>                               
                                <ButtonContainer>
                                <Button
                                    href={`${project.url}`}
                                    target ='_blank'
                                    >
                                        Live
                                    </Button>
                                    <Button
                                    href={`${project.source}`}
                                    target ='_blank'
                                    >
                                        Source
                                    </Button>
                                </ButtonContainer>
                            </CardWrapper>
                        </CardContainer> 
                    )
                })
            }
        </Card>
    )
}

export default CardList;