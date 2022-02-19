import React,{useState,useRef,useEffect} from 'react'
import { View, ScrollView,Image, StyleSheet, useWindowDimensions } from 'react-native'
import {io} from "socket.io-client";
import CustomInput from '../component/custominput';
import CustomButton from '../component/custombutton';
import { useNavigation } from '@react-navigation/native';

    export const socket =io("http://192.168.43.81:3001");
 

    //    export const initSocket =(room)=>{
    //     const socketRef = useRef();
    // socketRef.current=io("http://192.168.43.81:3001");
    // socketRef.current.on('message',message=>{
    //     console.log(message)
    // })
    // }

const SignIn = () => {
    const navigation = useNavigation();
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const {height} = useWindowDimensions();



    // const socketRef = useRef();
    // socketRef.current = io("http://192.168.43.81:3001");
    // socketRef.current.on('message',message=>{
    //     console.log(message)
    // })
    useEffect(()=>{
     socket.on('message',(message: string)=>{
        console.log("sign in msg to user:",message)
    })   
    })
       
    // const childRef = useRef(null)
    // console.log(childRef.current)

    

    const onSignInPressed=async()=>{
        console.log(username,password)
        navigation.navigate('Home');
    
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
         
        <CustomInput 
        placeholder='Username' 
        value={username} 
        setValue={setUsername}/>
        <CustomInput 
        placeholder='Room'
        value={password}
        setValue={setPassword}
        />
        <CustomButton text={"Enter Room"} onPress={onSignInPressed}/>

        </View>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    root:{
        alignItems:'center',
        padding:75,
    },
    
})

export default SignIn

