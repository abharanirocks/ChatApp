import React, { useState,useEffect,useRef} from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput,FlatList,TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRoute} from '@react-navigation/native';

import {io} from "socket.io-client";
import ChatMessage from '../component/messages';
import { FontAwesome } from '@expo/vector-icons';
import {data} from '../data/data'
import CustomInput from '../component/custominput'; 
import SignIn from './signin';
import {socket} from './signin'




export default function Chat() {


  const route = useRoute();
  console.log("chat screen params",route.params)
 const params= route.params
   const { id, user } = route.params;
  const [chat,setChat] = useState({message:""});
  const [message, setMessage] = useState();

// socketRef.current.on('message',message=>{
//         console.log(message)
//     })

  const onSend=()=>{
    socket.emit('chatMessage',(message))   
    
    console.log(message,"Sendddddddd...........")
    console.warn(user,' : ',message,)

    //     const socketRef = useRef();
    // socketRef.current = io("http://192.168.43.81:3001");
    // socketRef.current.on('chatMessage',message=>{
    //     console.log(message)
    // })
    setMessage('')
   } 

  // const submitChatMessage= ()=>{
    
  //   const {messages} =chat;
  //   socketRef.current.emit('send-message', messages=>  console.log(messages));

  //   console.log("submit")
  // }
    
  return (
    
    <View 
       style={styles.container}>

      <Text style={styles.text}>{user}</Text>
      <Text style={styles.user}>{id}</Text>
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
      {/*<ChatMessage title="green apple" message={params}/>*/}
      <ChatMessage 
      title="user1" 
      message={message} 
      onMsgSet={(newMessage)=>{setMessage(newMessage)}} 
      onMsgSend={()=>{console.log('msg submitted')}}/>
      </View>
  
      <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
          <CustomInput placeholder="Type a Message" type="SECONDARY" value={message} setValue={setMessage} />
          </View>
          <TouchableOpacity style={styles.send} onPress={onSend}>
          
          {/*<Feather name="send" size={23} color="blue" />*/}
          <FontAwesome name="send" size={29} color="#1A91E1" />
          </TouchableOpacity>
          
          </View>
   
   
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
    
  },
  inputContainer:{
        padding:4,
        flexDirection:"row",
        height:"6%",
    },
    inputBox:{
        flex:1,
        height:"100%",
        // bottom:   'keyboardOffset',
        // backgroundColor:"pink"

    },
    send:{
        height:"100%",
        // backgroundColor:'orange',
        marginTop:'1%',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
    }
});