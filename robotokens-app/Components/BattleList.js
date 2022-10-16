import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'
import styled from 'styled-components'


const BattleList = (props) => {

    const {battleList} = props;


    return (
        battleList.map((item, index) =>

             
            <Item>
                <Adjacent>
                    <PlayerName>{item.players[0]}</PlayerName> <PoolValue>Pool value: ${item.bets[0]}</PoolValue> <Text>vs</Text> <PlayerName>{item.players[1]}</PlayerName> <PoolValue>Pool value: ${item.bets[1]}</PoolValue>
                </Adjacent>

                <Adjacent>
                    {/* <Text>{item.time / 1000}:00</Text> */}
                    <Text>{String(Math.floor(((50_000 - (Date.now() -item.time )) / (1000 * 60)) % 60)).padStart(2, '0')}:{String(Math.ceil(((50_000 - (Date.now() -item.time )) / 1000) % 60)).padStart(2, '0')}</Text>
                </Adjacent>
                
            </Item>
    ) 
    )
}

const Item = styled.section`
    padding: 1vw;
    font-family: Impact;
    background-color: rgba(121, 190, 227, 1);
    color: white;
    font-size: 2vw;
    border-radius: 0.4vw;
    margin: 1vw;
    display: flex;
    justify-content: space-between;
`

const Text = styled.section`
    margin: 0.5vw;
`

const PlayerName = styled.section`
    margin: 0.5vw;
    background-color: blue;
    padding: 1vw;
    border-radius: 0.4vw;
`
const PoolValue = styled.section`
    margin: 0.5vw;
    background-color: #32a643;
    padding: 1vw;
    border-radius: 0.4vw;
`

const Adjacent = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export default BattleList