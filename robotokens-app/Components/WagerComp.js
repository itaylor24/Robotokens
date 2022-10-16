import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BattleList from '../Components/BattleList'

const WagerComp = (props) => {

    const {battleList} = props; 


    return (
        <Section>
            <MainTitle>WAGER</MainTitle>  
            <SubTitle>Queue List</SubTitle>
            <CurrentBattlesContainer>
                <BattleList battleList = {battleList}
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