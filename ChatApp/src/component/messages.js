import React,{useState} from 'react'
import { View, Text, StyleSheet, FlatList, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import {data} from '../data/data'

const ChatMessage = ({title,message,onMsgSet,onMsgSend}) => {
    
    const isMyMessage =(item)=>{
        return item['user']['id'] === 'u1';

    }
//  
    return (
        <View>

       <FlatList 
          style={{width:'100%'}}
          data={data.messages}
          keyExtractor={item=>item.id}
          inverted
           showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.container}>
            <View style={
              [styles.messageBox,
              {backgroundColor:isMyMessage(item) ? '#AED6F1': '#F1F0F0',
               marginLeft: isMyMessage(item) ? 50 :0,
               marginRight: isMyMessage(item) ? 0 :50}
              ]}>
            {!isMyMessage(item) && <Text style={styles.name}>{item.user['name']}</Text>}
            <Text style={styles.msg}>{item.content}</Text>
            <Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
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
    borderRadius:10,
    padding:10,

  },
  name:{
    color:'#0650A9',
    fontWeight:'bold',
    marginBottom:5,
  },
  msg:{

  },
  time:{
    alignSelf:"flex-end",
    color:'grey'
  }
});


export default ChatMessage

