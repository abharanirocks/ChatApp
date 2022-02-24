import React, { useState,useEffect,useRef} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,SafeAreaView,FlatList,TouchableWithoutFeedback } from 'react-native';
import CustomButton from '../component/custombutton';
import { useNavigation } from '@react-navigation/native';
import {io} from "socket.io-client";
import styled from '../component/onlinelist';
import {socket} from '../screens/signin';
import {useRoute} from '@react-navigation/native';


export const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

export default function OnlineUser() {

    const route = useRoute();
  console.log("Signin params",route.params)
     const { mainUser,pswrd } = route.params;

       const [chat,setChat] = useState({message:""});
       const [messages, setMessage] = useState();

  const navigation = useNavigation();

    useEffect(()=>{
     socket.on('message',(message: string)=>{
        console.log("index msg to user:",message)
    })   
    },[])
    const room='commonRoom'
    const socketid = socket.id;
    socket.emit('joinRoom',{mainUser,socketid,room});


    socket.on('roomUsers',({room,users})=>{
    console.log("Room users^^^^",room);
    console.log('total users@@@@',users);
    })
       



  const onChatPressed=(item)=>{
    console.log('****************',item.userName)
        console.log("online users screen")
        //join chat room
       const secondUser=item.userName 
       const matchRoom = "matchRoom"
      socket.emit('joinMatch',{mainUser,secondUser,matchRoom})
        navigation.navigate('Chat',{id:item.id, user:item.userName,});
    
    }







  // const socketRef = useRef();
  // socketRef.current = io("http://192.168.43.81:3001");
  
    
  return (
    <View style={styles.container}>

        
      <Text style={{fontSize: 40}}>Online Users</Text>
      <CustomButton text={"Chat"} onPress={onChatPressed} type="TERTIARY"/>
      <Text style={styles.text}>{mainUser}</Text>

  


         <TouchableWithoutFeedback>
         <FlatList 
          style={{width:'100%'}}
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
      <View style={styled.container} >
        <View style={styled.lefContainer}>
        <Text>avatar </Text>
          {/*<Image source={{ uri: otherUser.imageUri }} style={styles.avatar}/>*/}

          <View style={styled.midContainer} >
            <Text style={styled.username} onPress={()=>onChatPressed(item)}>{item.userName}</Text>
            {/*<Text
              numberOfLines={2}
              style={styled.lastMessage}>
              In game
            </Text>*/}
          </View>

        </View>
        <Text style={styled.invite}>invite user</Text>

        
      </View>
      )}
        />
    </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    padding:75,
    
  },
  text:{
    fontSize: 30,
  }
});


    {/*<TouchableWithoutFeedback>
      <View>
      <FlatList 
          
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={
              ()=>{
                console.warn(`clicked on ${item.id}`)
                console.log('------------------------------',item.userName)
                navigation.navigate('Chat', {id:item.id, user:item.userName,})
            }}>
            
              <UserInfo>
                
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
        {
              ()=>{
                console.log('------------------------------',item.userName)
                navigation.navigate('Chat', {id:item.id, user:item.userName,})
            }}
        </View>
        </TouchableWithoutFeedback>*/}