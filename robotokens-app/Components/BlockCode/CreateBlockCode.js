import React, { useState } from 'react'
import styled, {keyframes} from 'styled-components'; 
import Block from './Block';
import BlockList from './BlockList';
import CreateBlockButton from './CreateBlockButton';
import Script from './Script';

const CreateBlockCode = (props) =>{

    const [script, updateScript] = useState([]); 
    const [blocklist, updateBlockList] = useState([]); 


    return (<div>
        
        <BlockList />
        <CreateBlockButton />
        <Script />

    </div>)
}

export default CreateBlockCode
