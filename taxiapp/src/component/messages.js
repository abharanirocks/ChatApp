import React,{useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import {data} from '../data/data'

const ChatMessage = () => {
    
    const isMyMessage =()=>{
        return data.messages['user']['id'] === 'u1';
    }

    return (
        <View>
       <FlatList 
          style={{width:'100%'}}
          data={data.messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <View style={styles.container}>
            <View style={[styles.messageBox, backgroundColor:isMyMessage() ? '#47ACEA': 'white']}>
            <Text>{item.user['name']}</Text>
            <Text>{item.content}</Text>
            <Text>{moment(item.createdAt).fromNow()}</Text>
            </View>
            </View>
            
      )}
        /> 
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    
  },
  messageBox:{
    backgroundColor:'grey',
    marginRight:50,
    borderRadius:8,
    padding:10,
  }
});


export default ChatMessage

