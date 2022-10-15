import React from 'react'
import styled from 'styled-components'

const Section2 = () => {
  return (
    <Section>
        <MainTitle>RoboToken Steps</MainTitle>
        <MainContainer>
            <Holder>
            <SubTitle>What Are RoboTokens ?</SubTitle>
            <Details>RoboTokens are a collection of decentralized autonomyous developer lead Non-fundigble tokens. Unlike majority of NFTs that are practicalyy useless, RoboToken brings value to the table.</Details>
            </Holder>
            <Holder>
            <SubTitle> 1- Create RoboToken NFT</SubTitle>
            <Details>In less than 5 minutes, design and develop your own RoboToken under the create tab. With our simple language block, anybody anywhere can immeidielty unleash his inner creativty and algorothmatic skills.</Details>
            </Holder>
            <Holder>
            <SubTitle> 2- Battle with your RoboToken</SubTitle>
            <Details>After finishing your RoboToken, head to the battle tab and queue up to get matched with another RoboToken and battle it out. Then we suggest bulding a strong reputation for your RoboToken.</Details>
            </Holder>
            <Holder>
            <SubTitle> 3- Analyze/Bet on Results</SubTitle>
            <Details>Observers can head to the Wager tab to analayze the RoboToken NFTs and wager on the outcome. A small percantge fee goes to the RoboToken creater and the RoboToken Team</Details>
            </Holder>
        </MainContainer>
    </Section>
  )
}

const Section = styled.section`
display: flex;
align-items: center;
color: black;
height: 100%;
background-color: #b6c9cc;
flex-direction: column;
`

const MainTitle = styled.div`
font-size: 4vw;
margin-top: 3vw;
margin-bottom: 0vw;
font-weight: 600;
`

const MainContainer = styled.div`
margin-left: 1vw;
display: grid;
// background-color: coral;
align-items: center;
align-text: center;
justify-content: center;
grid-template-columns: 2fr 1fr;
margin-bottom: 3vw;
`

const SubTitle = styled.div`
width:50vw;
display: flex;
align-items: center;
font-weight: 900;
// background-color: blue;
justify-content: center;
font-size: 3vw;
margin-top: 3vw;
`

const Details = styled.div`
display: flex;
width:90%;
align-items: center;
text-align: center;
justify-content: center;
font-size: 2vw;
margin-top: 3vw;
margin-bottom: 0vw;
`
const Holder = styled.div`
margin: 0vw;
`

export default Section2