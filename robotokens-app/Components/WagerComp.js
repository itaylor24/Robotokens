import React from 'react'
import styled from 'styled-components'

const WagerComp = () => {

  return (
    <Section>
        <MainTitle>WAGER</MainTitle>  
        <CurrentBattlesContainer>
            <SubTitle>Current Battles</SubTitle>
                
        </CurrentBattlesContainer>
    </Section>
  )
}


const Section = styled.section`
    width: 100vw;
    height: 80vw;
    background-color: #E2C5C6;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: black;
`

const MainTitle = styled.div`
    font-size: 4vw;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 2vw;
    margin-top: 1vw;
`

const CurrentBattlesContainer = styled.div`
    background-color: white;
    border: 8px double black;
    width: 80vw;
    height: 10vw;
`
const SubTitle = styled.div`
    font-size: 2vw;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 2vw;
    margin-top: 1vw;
`

export default WagerComp