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
		console.log('users joined:',user,user.room)

		socket.join(user.room);


	socket.emit('message',formatMessage(botName ,"Welcome this is gaming!"))
	
	socket.broadcast.to(user.room).emit('message', formatMessage(botName ,`${user.mainUser,mainUser} has joined the chat`));

	    io.to(user.room).emit('roomUsers',{
        room: user,
        users: getCurrentOnlineUser(user)
    	});
    	});

	socket.on('joinMatch',({mainUser,secondUser,matchRoom})=>{

			const userChat = userJoinMatch(mainUser,secondUser,matchRoom)
			
			console.log('2 users joined:',userChat)
			console.log(matchRoom)
			socket.join(userChat.matchRoom)

			socket.emit('message',formatMessage(botName ,"Welcome this is one to one gaming(in room)!"))
	
			socket.broadcast.emit('message', formatMessage(botName ,`${secondUser} has entered in a room`));

			io.to(userChat.matchRoom).emit('matchUsers',{
        	room: userChat.matchRoom,
       	 	users: getCurrentMatchUser(userChat.matchRoom)
    		});
    		


});
			// socket.on('gameResponse', (res)=>{
			// const user = getCurrentOnlineUser(socketid);
			// 	io.to(user.room).emit('message', formatMessage(mainUser,msg));	
			// 	console.log("backend msg");
			// 	})



				socket.on('chatMessage', (msg)=>{
				const user = getCurrentOnlineUser(socketid);
					io.to(user.matchRoom).emit('message', formatMessage(user.mainUser,msg));	
					console.log("backend msg",formatMessage(user.mainUser ,msg));
					console.log(user)

	          		 });


				socket.on('disconnect', ()=>{
				const user = userLeaveMatch(socketid)

					if(user){
						io.to(user.matchRoom).emit('message', formatMessage(botName ,` ${user} has left the game room`));	

							    io.to(user.matchRoom).emit('matchUsers',{
							        room: user.room,
							        users: getCurrentMatchUser(user.matchRoom)
							    	});
							}
					
				

				})
		
		
	          

		


		socket.on('disconnect', ()=>{
			const user = userLeaveRoom(socketid)

			if(user){
				io.to(user.matchRoom).emit('message', formatMessage(botName ,` ${user.mainUser} has left the game.(offline`));	
				}
					
				

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