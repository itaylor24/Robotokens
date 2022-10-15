import React from 'react'
import styled, {keyframes} from 'styled-components'; 
import Block from './Block';
import BlockList from './BlockList';
import CreateBlockButton from './CreateBlockButton';
import Script from './Script';

const CreateBlockCode = (props) =>{


    return (<div>
        <BlockList />
        <CreateBlockButton />
        <Script />
    </div>)
}

export default CreateBlockCode
