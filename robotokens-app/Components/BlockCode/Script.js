import React from 'react'
import styled from 'styled-components'; 

const Script = (props) =>{

    const {script} = props; 

    return (<ScriptContainer>
            Script
        {script.map((item, index)=>{
            return(<p key={index}>
                {item}
            </p>)
        })}
    </ScriptContainer>)
}


const ScriptContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
`

export default Script

