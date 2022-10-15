import React from 'react'
import styled from 'styled-components'
import CreateBlockCode from '../Components/BlockCode/CreateBlockCode'
import socket from '../utils/socket'; 

const create = () => {

  return (
    <Section>
      <MainTitle>Create A RoboToken</MainTitle>
      <Container><SubTitle>Robo Name:</SubTitle><NameInput /></Container>
      <Container><SubTitle>Robo Description:</SubTitle><DescriptionInput /></Container>
      <SubTitle>Create Script:</SubTitle>
      <CreateBlockCode  />
      <CreateButton>Create RoboToken</CreateButton>
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