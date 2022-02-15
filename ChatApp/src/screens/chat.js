import React, { useState,useEffect,useRef} from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput,FlatList } from 'react-native';
import {useRoute} from '@react-navigation/native';

import {io} from "socket.io-client";
import ChatMessage from '../component/messages';
import {data} from '../data/data'




export default function Chat() {


  const route = useRoute();
  console.log(route.params)
 const params= route.params
   const { id, user } = route.params;
  const [chat,setChat] = useState({message:""});
  const [messages, setMessage] = useState();

  

  const submitChatMessage= ()=>{
    
    const {messages} =chat;
    socketRef.current.emit('send-message', messages=>  console.log(messages));

    console.log("submit")
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{JSON.stringify(user)}</Text>
      <Text style={styles.user}>{JSON.stringify(id)}</Text>
    <Text style={styles.text}>Chat Application!</Text>
        {/*<TextInput
          style={styles.textinput}
          autoCorrect={false}
          // value={messages}
          // onSubmitEditing={() => submitChatMessage()}
          // onChangeText={chatMessage => {
            // <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
          //   {setChat};
          // }}
        />*/}
      <View>
      <ChatMessage/>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:75,
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
  text:{
    
    fontSize: 30
  },
  textinput:{
    height: '5%', 
    width:'90%',
    borderWidth: 2,
    alignItems : 'flex-end'
    
  },
  user:{
    fontSize:20,
    
  }
});