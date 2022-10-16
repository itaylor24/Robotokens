import React from 'react'
import styled from 'styled-components'

const Section2 = () => {
  return (
    <Section>

        <MainTitle>RoboToken Steps</MainTitle>

        <MainContainer>

          <Holder>
            <SubTitle>What Are RoboTokens?</SubTitle>
            <Details>RoboTokens are a collection of decentralized autonomous developer lead Non-fundigble tokens. Unlike majority of NFTs that are practically useless, RoboToken brings value to the table.</Details>
          </Holder>

          <Holder>
            <SubTitle> 1. Create RoboToken NFT</SubTitle>
            <Details>In less than 5 minutes, design and develop your own RoboToken under the create tab. With our simple language block, anybody anywhere can immeidielty unleash his inner creativty and algorothmatic skills.</Details>
          </Holder>

          <Holder>
            <SubTitle> 2. Battle with your RoboToken</SubTitle>
            <Details>After finishing your RoboToken, head to the battle tab and queue up to get matched with another RoboToken and battle it out. Then we suggest bulding a strong reputation for your RoboToken.</Details>
          </Holder>

          <Holder>
            <SubTitle> 3. Analyze/Bet on Results</SubTitle>
            <Details>Observers can head to the Wager tab to analayze the RoboToken NFTs and wager on the outcome. A small percentage fee goes to the RoboToken creater and the RoboToken Team</Details>
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
  font-family: 'Verdana';
`

const MainTitle = styled.div`
  font-size: 4vw;
  margin-top: 6vw;
  margin-bottom: 2vw;
  font-weight: 600;
  font-family: impact;
`

const MainContainer = styled.div`
  display: grid;
  // background-color: coral;
  align-items: center;
  align-text: center;
  justify-content: center;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 5vw;
  width: 80vw;
  padding-bottom: 2vw;
  column-gap: 50px;
`

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  // background-color: blue;
  justify-content: center;
  font-size: 3vw;
  margin-top: 3vw;
  font-family: 'Impact';
`

const Details = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  // background-color: green;
  font-size: 1.4vw;
  line-height: 2;
  margin-top: 3vw;
  margin-bottom: 0vw;
  font-family: 'Verdana';
`
const Holder = styled.div`
  align-items: center;
  justify-content: center;
  display: block;
  // background-color: red;
  text-align: center;
  height: 100%;
  width: 40vw;
`

export default Section2