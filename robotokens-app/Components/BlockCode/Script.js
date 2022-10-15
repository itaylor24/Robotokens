import React from 'react'

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
