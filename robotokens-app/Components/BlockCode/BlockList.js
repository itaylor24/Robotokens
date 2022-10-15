import React from 'react'
import Block from './Block';
import styled from 'styled-components'; 

const BlockList = (props) =>{

    const {blocklist} = props; 

    return (<BlockListContainer>
        {blocklist.map((item,index)=>{
            return <Block block = {item} key={`${index}`+item.name} />
        })}
    </BlockListContainer>)
}

const BlockListContainer = styled.div`
    display:flex; 
    justify-content:center; 
    padding: 20px; 
    border: 5px solid black; 
    flex-direction: column; 
    border-radius: 10px; 
`

export default BlockList
