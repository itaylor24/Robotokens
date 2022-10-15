
const io = require('socket.io')(); 

io.on('connection', client=>{
    client.emit('init', {data: 'connected'}); 

}); 


io.listen(3000, ()=> console.log("Server Started")); 