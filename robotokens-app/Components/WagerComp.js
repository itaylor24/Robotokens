import React from 'react'
import styled from 'styled-components'
import BattleList from '../Components/BattleList'

const WagerComp = () => {

  return (
    <Section>
        <MainTitle>WAGER</MainTitle>  
        <SubTitle>Queue List</SubTitle>
        <CurrentBattlesContainer>
            <BattleList battleList = {[
                {players: {0: "Robot 1", 1: "Robot 2"}, bets: {0: 100, 1: 300}, time: 3 * 1000}, 
                {players: {0: "The Pulverizer", 1: "Robot 2"}, bets: {0: 100, 1: 300}, time: 64 * 1000},
                {players: {0: "AI 3", 1: "Robot 2"}, bets: {0: 100, 1: 300}, time: 3000},
                {players: {0: "Robot 1", 1: "Robot 2"}, bets: {0: 100, 1: 300}, time: 3000},
                {players: {0: "Robot 1", 1: "Robot 2"}, bets: {0: 100, 1: 300}, time: 3000},
                {players: {0: "Robot 1", 1: "Robot 2"}, bets: {0: 100, 1: 300}, time: 3000},
                {players: {0: "Robot 1", 1: "Robot 2"}, bets: {0: 100, 1: 300}, time: 3000},
            ]}
            />
                
        </CurrentBattlesContainer>
    </Section>
  )
}


const Section = styled.section`
    width: 100vw;
    // background-color: #E2C5C6;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: black;
    margin-bottom: 10vw;
`

const MainTitle = styled.div`
    font-size: 4vw;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 2vw;
    margin-top: 7vw;
    font-family: Impact;
`

const CurrentBattlesContainer = styled.div`
    background-color: white;
    border: 0.2vw solid #999999;
    border-radius: 0.4vw;
    width: 80vw;
    height: 40vw;
    overflow: scroll;
`
const SubTitle = styled.div`
    font-size: 2vw;
    display: flex;
    padding: 1vw;
    margin-bottom: 2vw;
    margin-top: 1vw;
    font-family: "Verdana";
`

export default WagerComp