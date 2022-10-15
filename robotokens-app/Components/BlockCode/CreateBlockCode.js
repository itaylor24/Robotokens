import React, { useState } from 'react'
import Block from './Block';
import BlockList from './BlockList';
import CreateBlockButton from './CreateBlockButton';
import Script from './Script';

import styled from 'styled-components';

const CreateBlockCode = (props) =>{

    const [script, updateScript] = useState(['run (30 spaces)', 'walk (40 spaces)']); 
    const [blocklist, updateBlockList] = useState([{name: 'wait', instruction: '30 spaces'}, {name: 'walk', instruction: '40 spaces'}]); 

    return (<div>

        <BlockList blocklist = {blocklist}/>
        <CreateBlockButton />
        <Script script = {script}/>

    </div>)
}




export default CreateBlockCode
