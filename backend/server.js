const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const {userJoinRoom,
userJoinMatch, getCurrentOnlineUser,getCurrentMatchUser, userLeaveRoom,
userLeaveMatch, getRoomUsers, getMatchUsers,} = require('./users');
const port = 3001;
const formatMessage = require('./messages')
const botName= 'Bot_Testing';



io.on("connection", socket =>{
	console.log(socket.id,"New connection");
	const socketid = socket.id
	socket.on('joinRoom',({mainUser,socketid,room})=>{
		console.log(socketid)
		const user = userJoinRoom(mainUser,socketid,room);
		console.log('users joined:',user,user.mainUser)

		socket.join(user.room);


	socket.emit('message',formatMessage(botName ,"Welcome this is gaming!"))
	
	socket.broadcast.to(user.room).emit('message', formatMessage(botName ,`${user.mainUser,mainUser} has joined the chat`));

	socket.on('joinMatch',({mainUser,secondUser,matchRoom})=>{

			const userChat = userJoinMatch(mainUser,secondUser,matchRoom)
			socket.join(userChat.matchRoom)
			console.log('2 users joined:',userChat)

			socket.emit('message',formatMessage(botName ,"Welcome this is one to one gaming(in room)!"))
	
			socket.broadcast.emit('message', formatMessage(botName ,`A ${secondUser} has entered in a room`));

			socket.on('gameResponse', (res)=>{
			const user = getCurrentOnlineUser(socketid);
				io.to(user.room).emit('message', formatMessage(mainUser,msg));	
				console.log("backend msg");



			socket.on('chatMessage', (msg)=>{
			const user = getCurrentOnlineUser(socketid);
				io.to(user.matchRoom).emit('message', formatMessage(mainUser,msg));	
				console.log("backend msg",formatMessage(mainUser ,msg));

	});
		
		
	})

	});

	


	

 




 



	socket.on('disconnect', ()=>{
		io.emit('message', formatMessage(botName ,'A user has left the chat'));
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