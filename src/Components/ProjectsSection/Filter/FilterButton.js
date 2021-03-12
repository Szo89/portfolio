import React from 'react';
import {ButtonContainer, Button} from '../ButtonElements'

const FilterButton = ({buttons, filter}) => {
    return (
        <ButtonContainer>
            {
                buttons.map((category, i) => {
                    return(
                        <Button key={category.id} 
                        type='button'
                        onClick = {() => filter(category)}
                        >
                            {category}
                        </Button>
                    )
                })
            }
        </ButtonContainer>
    )
}

export default FilterButton;