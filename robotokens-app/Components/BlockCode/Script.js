import React from 'react'
import styled from 'styled-components'; 

const Script = (props) =>{

    const {script} = props; 

    return (<ScriptContainer>
            Script
        {script.map((item, index)=>{
            return(<div key={index}>
                {item}
            </div>)
        })}
    </ScriptContainer>)
}


const ScriptContainer = styled.div`
    display: flex; 
    padding: 10px; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
`

export default Script

