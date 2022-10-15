import React from 'react'
import styled, {css} from 'styled-components'; 


const Block = (props) => {
    const {block} = props; 

    return (<BlockContainer name = {block.name}>
        <BlockTitle name = {block.name}>
            {block.name.toUpperCase()}
        </BlockTitle>
        <BlockInstruction>
            {block.instruction}
        </BlockInstruction>
    </BlockContainer>)
}

export default Block

const BlockTitle = styled.div`
    font-weight: bold; 
    color: white; 
    font-size: 20px;  
    margin-right: 10px; 
   
`
const BlockInstruction = styled.div`
    color: white; 
    font-size: 15px; 
`

const BlockContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: fit-content; 
    padding: 20px; 
    padding-top: 10px; 
    padding-bottom: 10px; 
    border-radius: 10px; 
    margin-bottom: 5px; 
    margin-top: 5px; 
   
    ${props => props.name === 'run' && css  `
        background-color: red; 
    `}

    ${props => props.name === 'walk' && css `
        background-color: blue; 
    `}
    ${props => props.name === 'turn' && css `
        background-color: orange; 
    `}
    ${props => props.name === 'throw' && css `
        background-color: green; 
    `}
    ${props => props.name === 'wait' && css `
        background-color: gray; 
    `}
`