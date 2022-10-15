const express = require('express'); 
const {Server} = require('socket.io'); 
const http = require('http'); 
const cors = require('cors'); 
const app = express(); 

const server = http.createServer(app)

app.use(cors); 

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
}); 


let activePlayers = 0; 
let roomNo; 
const activeRooms = {}

const history = []; 

io.on('connection', (socket)=>{
    console.log(`User ${socket.id} connected`)

    socket.on('find', (data)=>{
        activePlayers++; 
        roomNo = Math.round(activePlayers/2); 
        socket.join(roomNo); 
        console.log(roomNo); 
        socket.emit('joined_room', roomNo); 
        console.log(data); 
        if(activePlayers%2===1){
            activeRooms[roomNo] = {status:'waiting', players: [socket.id] }; 
        }else 
        if(activePlayers%2===0){
            activeRooms[roomNo].status = 'started'; 
            activeRooms[roomNo].players.push(socket.id);
            
        }
        console.log(activeRooms); 
        setTimeout(()=>{
            socket.emit('start_game')
        }, 10000)
        socket.emit('waiting', {})
        socket.on(''); 
    })

    socket.on('game_over', (data)=>{
        //data = {winner: 1 or 2, room: roomNo} emitted by winning player
        let winnerId = data.winner - 1;  
        let loserId = winnerId === 1? 2 : 1; 
        let thisRoom = ''+data.room 
        history.push({winner: activeRooms[thisRoom].players[winnerId], loser:activeRooms[thisRoom].players[loserId]}); 
        console.log(history); 
        io.in(thisRoom).disconnectSockets(); 
        activePlayers -= 2; 
        delete activeRooms[thisRoom]; 
    })

    socket.on('')

}); 

io.on('disconnect', (socket)=>{
    console.log('User Disconnected')
}); 

server.listen(3001, ()=>console.log("Server Running")); 