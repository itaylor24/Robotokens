import React from 'react'
import Block from './Block';

const BlockList = (props) =>{

    const {blocklist} = props; 


    return (<div>
        {blocklist.map((item,index)=>{
            return <Block block = {item} key={`${index}`+item.name} />
        })}
    </div>)
}

export default BlockList
