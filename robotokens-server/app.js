const express = require('express'); 
const {Server} = require('socket.io'); 
const http = require('http'); 
const cors = require('cors'); 
const app = express(); 

const server = http.createServer(app)

app.use(cors); 

const sum = (sumArray)=>{
    const result = sumArray.reduce((partialSum, a) => partialSum + a, 0);
    return result 
}
    


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
}); 


let activePlayers = 0; 
let roomNo; 
const activeRooms = {}
const roomPlayers = {}; 

const history = []; 

io.on('connection', (socket)=>{
    console.log(`User ${socket.id} connected`)

    socket.on('find', (data)=>{
        activePlayers++; 
        roomNo = Math.round(activePlayers/2); 
        roomPlayers[socket.id] = roomNo; 
        socket.join(roomNo); 

        socket.emit('joined_room', roomNo); 

        if(activePlayers%2===1){
            activeRooms[roomNo] = {status:'waiting for players', players: [socket.id], bids:{0:[], 1:[]}}; 
        }else 
        if(activePlayers%2===0){
            activeRooms[roomNo].status = 'started countdown'; 
            activeRooms[roomNo].players.push(socket.id);

            let time = Date.now(); 

            setTimeout(()=>{
                let roomNo = roomPlayers[socket.id];

                io.sockets.in(roomNo).emit('start_game'); 

                activeRooms[roomNo].status = 'started'; 
            }, 20_000)
            
            activeRooms[roomNo].time = time; 
            
            io.sockets.in(roomNo).emit('waiting', {time: 20_000-(Date.now()-activeRooms[roomNo].time), betAmounts:{1:0, 2:0}}); 
            
            
        }



        socket.on('recieved', ()=>{
            
            setTimeout(()=>{
                let roomNo = roomPlayers[socket.id]; 

                let bidsForPlayer1 = activeRooms[roomNo].bids[0] ? activeRooms[roomNo].bids[0].map((item)=>{return item.amount}) : [0]; 
                let bidsForPlayer2 = activeRooms[roomNo].bids[1] ? activeRooms[roomNo].bids[1].map((item)=>{return item.amount}) : [0]; 
                
                socket.to(roomNo).emit('waiting', {time: 20_000-(Date.now()-activeRooms[roomNo].time), betAmounts:{1:sum(bidsForPlayer1), 2:sum(bidsForPlayer2)}});
                console.log({time: 20_000-(Date.now()-activeRooms[roomNo].time), betAmounts:{1:sum(bidsForPlayer1), 2:sum(bidsForPlayer2)}}); 
            }, 1000); 
             
        }); 

        socket.on('game_over', (data)=>{
            //data = {winner: 1 or 2, room: roomNo} emitted by winning player
            let winnerId = data.winner - 1;  
            let loserId = winnerId === 1? 2 : 1; 
            let thisRoom = ''+data.room 
            history.push({winner: activeRooms[thisRoom].players[winnerId], loser:activeRooms[thisRoom].players[loserId]}); 

            io.in(thisRoom).disconnectSockets(); 
            activePlayers -= 2; 
            delete activeRooms[thisRoom]; 
        })
    
        socket.on('disconnect', (socket)=>{
            console.log('User Disconnected')
        }); 

    })

    socket.on('query_battles', ()=>{

        let roomsArray = Object.keys(activeRooms).reverse().map((item)=>{return activeRooms[item]}); 

        roomsArray = roomsArray.filter((item)=>{
             
            return item.status === "started countdown"; 
        })

        socket.emit('send_battles', roomsArray); 
        
    })

    socket.on('wager', (data)=>{
        let {roomNo, bid} = data; 
        console.log(data); 
        let bidPlayer = bid.forPlayer; 
        let bidder = bid.author; 
        let amount = bid.amount;
        
        activeRooms[roomNo].bids[bidPlayer].push({author: bidder, amount:amount}) 

    })


}); 



server.listen(3001, ()=>console.log("Server Running")); 