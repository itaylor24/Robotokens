import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'; 
import styled from "styled-components"; 
import socket from '../utils/socket'; 

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
      
         {(!start===true && !roomNo) && <FindMatchButton onClick={handleFindMatch}>
            Find Match
        </FindMatchButton>}
        {(!start===true && roomNo && !gameTime) &&  <WaitDisplay>
            ROOM: {roomNo} WAITING!!
          </WaitDisplay>}
        {(!start===true && roomNo && gameTime) && <MatchWaitDisplay>
            TIME: {gameTime} BETS: {betAmounts[0]}, {betAmounts[1]}
          </MatchWaitDisplay>

        }
        {start === true && <MatchDisplay>
            MATCH STARTED
        </MatchDisplay>
          
        }

    </div>

    )
}

const FindMatchButton = styled.button`
    
`
const MatchDisplay = styled.div`
  font-size: 30px; 
`
const MatchWaitDisplay = styled.div`
  font-size: 30px; 
`
const WaitDisplay = styled.div`
  font-size: 30px; 
`
export default battle