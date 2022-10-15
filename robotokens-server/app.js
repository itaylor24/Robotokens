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



server.listen(3001, ()=>console.log("Server Running")); 