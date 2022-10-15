import React from 'react'
import styled from 'styled-components'; 

const CreateBlockButton = (props) =>{

    const {click} = props; 

    return (
    <CreateButtonContainer onClick={click}>
        Add Block
    </CreateButtonContainer>
    )
}


const CreateButtonContainer = styled.div`
    width: fit-content; 
    padding: 10px; 
    background-color: green; 
    color: white; 
    margin: 10px; 
    border-radius: 10px; 
    &:hover{
       filter: brightness(.6); 
       cursor: pointer; 
    }
`

export default CreateBlockButton
