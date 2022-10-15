import React from 'react'
import styled, {keyframes} from 'styled-components'; 

const Script = (props) =>{

    const {script} = props; 

    return (<div>
        {script.map((item, index)=>{
            return(<p key={index}>
                {item}
            </p>)
        })}
    </div>)
}

export default Script
