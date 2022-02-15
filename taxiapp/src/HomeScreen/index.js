import React, { useState,useEffect,useRef} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,SafeAreaView,FlatList,TouchableWithoutFeedback } from 'react-native';
import CustomButton from '../component/custombutton';
import { useNavigation } from '@react-navigation/native';
import {io} from "socket.io-client";
import styled from '../component/onlinelist';


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

  const navigation = useNavigation();
  const onChatPressed=async()=>{
        console.log("online users screen")
        navigation.navigate('Chat');
    
    }
  const [chat,setChat] = useState({message:""});
  const [messages, setMessage] = useState();

  // const socketRef = useRef();
  // socketRef.current = io("http://192.168.43.81:3001");
  
  const submitChatMessage= ()=>{
    
    const {messages} =chat;
    socketRef.current.emit('send-message', messages);
    console.log("suubmit")
  }
    
  return (
    <View style={styles.container}>

        
      <Text style={{fontSize: 40}}>Online Users</Text>
      <CustomButton text={"Chat"} onPress={onChatPressed} type="TERTIARY"/>

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
        </View>
        </TouchableWithoutFeedback>*/}


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
            <Text style={styled.username} onPress={
              ()=>{
                console.warn(`clicked on ${item.id}`)
                console.log('------------------------------',item.userName)
                navigation.navigate('Chat', {id:item.id, user:item.userName,})
            }}>{item.userName}</Text>
            <Text
              numberOfLines={2}
              style={styled.lastMessage}>
              textttt
            </Text>
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