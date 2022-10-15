import React from 'react'
import io from 'socket.io-client'; 
import styled from "styled-components"; 

const socket = io.connect('http://localhost:3001'); 

const findmatch = (props) => {
  
    const handleFindMatch = () =>{
        socket.emit('find')
    }

    return (
    <div>
        <FindMatchButton onClick={handleFindMatch}>

        </FindMatchButton>
    </div>

    )

}

const FindMatchButton = styled.button`

`

export default findmatch