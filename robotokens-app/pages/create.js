import React, {useState, useRef} from 'react'
import {ethers, BigNumber} from "ethers";
import RoboTokenContract from "../artifacts/contracts/RoboTokenContract.sol/RoboTokenContract.json"
import styled from 'styled-components'
import CreateBlockCode from '../Components/BlockCode/CreateBlockCode'
import socket from '../utils/socket'; 
import { useStateContext } from '../context/StateContext'
import { toast } from "react-hot-toast";
import { useRouter } from 'next/router'

const roboTokensNFTContractAddress = "0xB471c5fc4d130080C862686D5bE692822e713D9a";

const create = () => {

  const router = useRouter()
  const { accounts } = useStateContext();
  const isConnected = Boolean(accounts[0]);

  const [script, updateScript] = useState([]); 
  const nameRef = useRef();
  const descriptionRef = useRef();

  async function handleMint() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          roboTokensNFTContractAddress,
          RoboTokenContract.abi,
          signer
        );
        try {
            const response = await contract.createMyRoboToken(nameRef.current.value,descriptionRef.current.value,accounts[0],script,{
            value: ethers.utils.parseEther((0.02).toString()), });
            toast.success(`Succesfully Minted Your ${nameRef.current.value}!`);   
            router.push("./");
            console.log('response: ', response);
            // console.log('Name: ', nameRef.current.value);
            // console.log('Dsc: ', descriptionRef.current.value);
            // console.log('Script: ', script);
            // console.log('Sender: ', accounts[0]);
          } catch (err) {
            console.log('error: ', err);
        }
    }
}

  return (
    <Section>
      <MainTitle>Create A RoboToken</MainTitle>
      <Container><SubTitle>Robo Name:</SubTitle><NameInput ref={nameRef}/></Container>
      <Container><SubTitle>Robo Description:</SubTitle><DescriptionInput ref={descriptionRef}/></Container>
      <SubTitle>Create Script:</SubTitle>
      <CreateBlockCode script = {script} updateScript = {updateScript} />
      <CreateButton onClick={handleMint}>Create RoboToken</CreateButton>
    </Section>

  )

}

const Section = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const MainTitle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 4vw;
 margin: 2vw;
`
const SubTitle = styled.div`
display: flex;
align-items: center;
font-weight: 900;
justify-content: center;
font-size: 3vw;
margin-top: 3vw;
margin-bottom: 3vw;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const NameInput = styled.input`
margin-left: 2vw;
width: 20vw;
height: 2.5vw;
`

const DescriptionInput = styled.input`
margin-left: 2vw;
width: 20vw;
height: 2.5vw;
`
const CreateButton = styled.button`
margin-top: 1.5vw;
margin-bottom: 1.5vw;
font-size: 1.5vw;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: #229F73;  
font-family: 'Verdana';
padding: 1.5vw;
border: none;
color: white;
cursor: pointer;
&:hover{
  transform: scale(1.1);
  border: 3px double black;
}
`

export default create