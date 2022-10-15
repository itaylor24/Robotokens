import React, { useState } from 'react'
import Block from './Block';
import BlockList from './BlockList';
import CreateBlockButton from './CreateBlockButton';
import Script from './Script';
import Popup from 'reactjs-popup'; 
import styled from 'styled-components';
import BlockSelectorModal from './BlockSelectorModal';

const CreateBlockCode = (props) =>{

    const [script, updateScript] = useState(['run (30 spaces)', 'walk (40 spaces)']); 
    const [blocklist, updateBlockList] = useState([{name: 'wait', instruction: '30 spaces'}, {name: 'walk', instruction: '40 spaces'}]); 
    const [showModal, setShowModal] = useState(false); 

    const handleClick = () =>{
        setShowModal(!showModal); 
    }

    return (<div>

        <BlockList blocklist = {blocklist}/>
        <CreateBlockButton click={handleClick}/>
        <BlockSelectorModal showModal ={showModal} setShowModal={setShowModal} />
        <Script script = {script}/>

    </div>)
}

const Trigger = styled.button`
    display: contents; 
`


export default CreateBlockCode
