import React,{useState} from 'react'
import { View, Text, StyleSheet, FlatList,ScrollView,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import {data} from '../data/data';
import CustomInput from './custominput';

const InputMsg = (messages1,setMessages1) => {
 
 const [message, setMessage] = useState();   
   const onSend=()=>{
    console.log(message,"Sendddddddd...........")
    setMessage('')
   } 

  
    return (
            
          <View style={styles.container}>
          <View style={styles.inputBox}>
          <CustomInput placeholder="Type a Message" type="SECONDARY" value={message} setValue={setMessage} />
          </View>
          <TouchableOpacity style={styles.send} onPress={onSend}>
          
          {/*<Feather name="send" size={23} color="blue" />*/}
          <FontAwesome name="send" size={23} color="#1A91E1" />
          </TouchableOpacity>
          
          </View>
          
          
      
       
    )

}
const styles = StyleSheet.create({
    container:{
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
        padding:7,
    }
  
});


export default InputMsg

