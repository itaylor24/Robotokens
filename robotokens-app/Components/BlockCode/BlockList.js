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
    justify-content: center;
    align-items: center;
    grid-template-rows: repeat(10, 1fr); 
    grid-template-columns: repeat(6, 1fr); 
    padding: 20px; 
    gap: 0.5vw;
    margin-left: 1vw;
    margin-right: 1vw;
    border: 5px solid black; 
    border-radius: 10px; 
    height: 30vw; 
`

export default BlockList
