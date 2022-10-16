import React, { useState } from 'react'
import Block from './Block';
import BlockList from './BlockList';
import CreateBlockButton from './CreateBlockButton';
import Script from './Script';
import Popup from 'reactjs-popup'; 
import styled from 'styled-components';
import BlockSelectorModal from './BlockSelectorModal';


const CreateBlockCode = ({script, updateScript}) =>{

    const [blocklist, updateBlockList] = useState([]); 
    const [showModal, setShowModal] = useState(false); 

    const handleClick = () =>{
        setShowModal(!showModal); 
    }

    const handleAddBlock = (newBlock) =>{
        let newBlockList = [...blocklist]; 
        newBlockList.push(newBlock); 
        updateBlockList(newBlockList); 
    }

    const handleUpdateScript = (newLine)=>{
        let newScriptList = [...script]; 
        newScriptList.push(newLine); 
        updateScript(newScriptList);
    }

    return (<div>
        <CreateContainer>
            <BlockList  blocklist = {blocklist}/>
            <Script script={script} /> 
        </CreateContainer>

        <CreateBlockButton click={handleClick}/>
        <BlockSelectorModal showModal ={showModal} setShowModal={setShowModal} handleAddBlock = {handleAddBlock} 
        handleUpdateScript = {handleUpdateScript}/>

    </div>)
}

const CreateContainer = styled.div`
    display:grid;
    grid-template-columns: 75% 25%; 
`


export default CreateBlockCode
