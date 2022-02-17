import React, { useState,useEffect,useRef} from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput,FlatList,TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRoute} from '@react-navigation/native';

import {io} from "socket.io-client";
import ChatMessage from '../component/messages';
import {data} from '../data/data'
import InputMsg from '../component/inputMsg';




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
    
    <View 
       style={styles.container}>

      <Text style={styles.text}>{JSON.stringify(user)}</Text>
      <Text style={styles.user}>{JSON.stringify(id)}</Text>
    <Text style={styles.user}>Chat Application!</Text>
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
      <View style={{flex: 1}}>
      <ChatMessage title="green apple" message={params}/>
      </View>
  
      <InputMsg/>
   
   
   {/* </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginTop:30,
    padding:20,
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
    fontSize:10,
    
  }
});