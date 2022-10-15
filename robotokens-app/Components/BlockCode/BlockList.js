import React from 'react'
import Block from './Block';
import styled from 'styled-components'; 
import Script from './Script';

const BlockList = (props) =>{

    const {blocklist} = props; 

    return (<BlockListContainer>
        {blocklist.map((item,index)=>{
            return <Block block = {item} key={`${index}`+item.name} />
        })}

    </BlockListContainer>)
}

const BlockListContainer = styled.div`
    display:grid; 
    grid-template-rows: repeat(10, 1fr); 
    grid-template-columns: repeat(6, 1fr); 
    padding: 20px; 
    border: 5px solid black; 
    border-radius: 10px; 
    height: 10vw; 
`

export default BlockList
