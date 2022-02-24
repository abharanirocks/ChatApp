const onlineUsers =[];
const matchUsers=[];
//join user
function userJoinRoom(mainUser,socketid,room){
    const user ={mainUser,socketid,room};
    onlineUsers.push(user);
    return onlineUsers;
}
function userJoinMatch(mainUser, secondUser,matchRoom){
    const user ={mainUser,secondUser};
    matchUsers.push(user);
    return matchUsers;
}


//get the cureent user
function getCurrentOnlineUser(socketid){
    return onlineUsers.find(user=> user.socketid==socketid);
}

function getCurrentMatchUser(socketid){
    return matchUsers.find(user=> user.socketid==socketid);
}


//user leaves chat
function userLeaveRoom(socketid){
    const index = onlineUsers.findIndex(user => user.socketid === socketid);
    if(index !==-1){
        return onlineUsers.splice(index, 1)[0];
    }
}
function userLeaveMatch(socketid){
    const index = matchUsers.findIndex(user => user.socketid === socketid);
    if(index !==-1){
        return matchUsers.splice(index, 1)[0];
    }
}
//get room users
function getRoomUsers(room){
    return onlineUsers.filter(user => user.room== room);
}
function getMatchUsers(matchRoom){
    return matchUsers.filter(user => user.matchRoom== matchRoom);
}
 
module.exports ={
    userJoinRoom,
userJoinMatch,
getCurrentOnlineUser,
getCurrentMatchUser,
userLeaveRoom,
userLeaveMatch,
getRoomUsers,
getMatchUsers,
};