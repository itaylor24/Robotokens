import React, { useEffect, useState } from 'react'
import WagerComp from '../Components/WagerComp'
import socket from '../utils/socket';

const wager = () => {

    const [battleList, setBattleList] = useState([]); 
    const [mounted, setMounted] = useState(false); 

    const sum = (sumArray)=>{
      const result = sumArray.reduce((partialSum, a) => partialSum + a, 0);
      return result 
    }
  
    useEffect(()=>{
      socket.emit('query_battles'); 
       
      socket.on('send_battles', (data)=>{
        let newList = data.map((item,index)=>{
  
          let bidsForPlayer1 = item.bids[0] ? item.bids[0] : [0]; 
          let bidsForPlayer2 = item.bids[1] ? item.bids[1] : [0];
          return {time: item.time, players: item.players, bets: {0: sum(bidsForPlayer1), 1: sum(bidsForPlayer2)}}
  
        }); 

        setTimeout(()=>{
          socket.emit('query_battles'); 
        },5_000)

        setBattleList(newList); 
  
      }); 
      

    },[])


  return (
    <WagerComp battleList ={battleList} />
  )
}

export default wager