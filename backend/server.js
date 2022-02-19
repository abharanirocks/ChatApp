const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const {userJoin,getCurrentUser,userLeave, getRoomUsers} = require('./users');
const port = 3001;


io.on("connection", socket =>{
	console.log(socket.id,"New connection");

	socket.on('joinRoom',({username,room})=>{

		const user=userJoin(socket.id,username,room);
        socket.join(user.room);
	socket.emit('message', "Welcome this is chatting!")
	
	socket.broadcast.emit('message', 'A user has joined the chat');

	 socket.broadcast.to(user.room).emit('message', `${username} has joined the chat`); //notifies everyone expect user itself io.emit()= to all clients

    //send userand room info
    io.to(user.room).emit('roomUsers',{
        room: user.room,
        users: getRoomUsers(user.room)
    });
    });

	socket.on('disconnect', ()=>{
		io.emit('message', 'A user has left the chat');
	})


 
	socket.on('chatMessage', (msg)=>{
		io.emit('message', msg);	
		console.log("backend msg",msg);
		
	})

    


});
server.listen(port, () => console.log("server running on port  " +port ));


// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
// const port = 3001;

// io.on("connection", socket => {
//   console.log("a user connected :D");
//   socket.on("chat message", msg => {
//     console.log(msg);
//     io.emit("chat message", msg);
//   });
// });

// server.listen(port, () => console.log("server running on port:" + port));