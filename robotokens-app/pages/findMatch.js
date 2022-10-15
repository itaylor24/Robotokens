import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'; 
import styled from "styled-components"; 
import socket from '../utils/socket'; 

const Findmatch = (props) => {
    
    const [action, updateAction] = useState(null); 
    const [roomNo, setRoomNo] = useState(null); 

    useEffect(()=>{
        console.log(action); 

        socket.on('joined_room', (data)=>{

            setRoomNo(data); 
            console.log(`Joined ${data}`); 

        }); 

        return ()=>{socket.removeListener('joined_room')}

    },[action])

    const handleFindMatch = () =>{
        socket.emit('find', {data: 'find me a match please' + ''+socket.id})
        updateAction('find'); 
    }
    const handleGameOver = () =>{

        socket.emit('game_over', {winner: 1, room: roomNo }); 

    }

    return (
    <div>
        <FindMatchButton onClick={handleFindMatch}>
            Find Match
        </FindMatchButton>
        <button onClick ={handleGameOver}> Game Over</button>
    </div>

    )

}

const FindMatchButton = styled.button`
    
`

export default Findmatch