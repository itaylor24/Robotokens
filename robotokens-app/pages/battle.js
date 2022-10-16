import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'; 
import styled from "styled-components"; 
import socket from '../utils/socket'; 
import loading from '../public/loading.gif';
import Image from 'next/image';

const battle = () => {
    const [action, updateAction] = useState(null); 
    const [roomNo, setRoomNo] = useState(null); 
    const [gameTime, setGameTime] = useState(null); 
    const [betAmounts, setBetAmount] = useState(null); 
    const [start, setStart] = useState(false); 

    useEffect(()=>{
        console.log(action); 

        socket.on('joined_room', (data)=>{

            setRoomNo(data); 
            console.log(`Joined ${data}`); 

            socket.on('waiting', (data)=>{
              console.log(data); 
              setGameTime(data.time); 
              setBetAmount(data.betAmounts); 
              socket.emit('recieved', "recieved"); 
            }); 

            socket.on('start_game', ()=>{
              socket.off('waiting');
              handleStartGame(); 
            })

        }); 

        return ()=>{socket.removeListener('joined_room')}

    },[action])

    const handleStartGame = ()=>{
        console.log("STARTTTTTT"); 
        setStart(true); 
    }
    const handleFindMatch = () =>{
        socket.emit('find', {data: 'find me a match please' + ''+socket.id})
        updateAction('find'); 
    }
    const handleGameOver = () =>{
        socket.emit('game_over', {winner: 1, room: roomNo }); 
    }

    return (
    <div>
      
      {
        (!start===true && !roomNo) && 

        <FindMatchScreen>
          <FindMatchButton onClick={handleFindMatch}>Find Match</FindMatchButton>
        </FindMatchScreen>

      }

      {(!start===true && roomNo && !gameTime) &&  
        
        <WaitRoomScreen>
          <WaitDisplay>You are in room number: {roomNo}</WaitDisplay>
          <Image
              src = "/loading.gif"
              alt="loading"
              width={200}
              height={200}
          />
        </WaitRoomScreen>
        
      }

      {(!start===true && roomNo && gameTime) && 
      
        <MatchWaitScreen>

          <TimeContainer>
            <Text2>Time until battle:</Text2>
            <Time>{gameTime}</Time>
          </TimeContainer>

          <BetAmountContainer>
            <Bet>Pool amount (1st Robot): ${betAmounts[1]}</Bet>
            <Bet>Pool amount (2nd Robot): ${betAmounts[2]}</Bet>
          </BetAmountContainer>

        </MatchWaitScreen>

      }
        {start === true && 
        
        <MatchScreen>
          MATCH STARTED
          <UnityContainer>

          </UnityContainer>
        </MatchScreen>
          
        }

    </div>

    )
}

const MatchScreen = styled.div`
  align-items: center;
  justify-content: center;
  padding: 100px;
  text-align: center;
  font-family: Impact;
  font-size: 4vw;
`

const BetAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const UnityContainer = styled.div`
  padding: 3vw;
  background-color: #B3B3B3;
  margin-top: 0.8vw;
`

const Bet = styled.div`
  padding: 3vw;
  background-color: lightgray;
  color: white:
  width: fit-content;
  font-family: Impact;
  font-size: 2.5vw;
  margin: 2vw;
  border-radius: 0.4vw;
`

const Text2 = styled.div`
  color: gray;
  font-size: 1.3vw;
`

const Time = styled.div`
  padding: 2vw;
  background-color: lightgray;
  color: white:
  width: fit-content;
  font-family: Impact;
  font-size: 3vw;
  margin-top: 0.8vw;
  border-radius: 0.4vw;
`

const FindMatchScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`

const WaitRoomScreen = styled.div`
  align-items: center;
  justify-content: center;
  padding: 100px;
  text-align: center;

`

const TimeContainer = styled.div`
  width: fit-content;
  margin-bottom: 5vw;
`

const FindMatchButton = styled.button`
  padding: 5vw;
  font-size: 2.5vw;
  font-family: Impact;
  outline: 0px;
  border: none;
  cursor: pointer;
  background-color: #229F73;
  color: white;
  border-radius: 0.4vw;
  &:hover {
    background-color: rgba(34, 159, 115, 0.5);
  }
`
const MatchDisplay = styled.div`
  font-size: 30px; 
`
const MatchWaitScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  text-align: center;
  flex-direction: column;
`
const WaitDisplay = styled.div`
  font-size: 2.5vw;
  font-family: Impact;
`
export default battle