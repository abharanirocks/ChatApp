const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3001;


io.on("connection", socket =>{
	console.log(socket.id);
	socket.emit('message', "Welcome this is chatting!")
	
	socket.broadcast.emit('message', 'A user has joined the chat');

	socket.on('disconnect', ()=>{
		io.emit('message', 'A user has left the chat');
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