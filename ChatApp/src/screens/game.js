import React,{useState,useRef,useEffect} from 'react'
import { View, ScrollView,Image, StyleSheet, useWindowDimensions } from 'react-native'
import {io} from "socket.io-client";
import CustomInput from '../component/custominput';
import CustomButton from '../component/custombutton';
import { useNavigation } from '@react-navigation/native';
import bg from './assets/bg.jpeg';



const GameBoard = () => {
    const navigation = useNavigation();


    

    const onChatPressed=()=>{
        console.log(Chhat preesseed!)
        
    
    }

    return (
        <View>
        <View style={styles.root}>
         
        <ImageBackground source={bg} style={styles.bg} resizeMode='contain' >
        <CustomButton text={"Chat"} onPress={onChatPressed} type="TERTIARY"/>
        
        </ImageBackground>
        </View>
        </View>
    )
}
const styles= StyleSheet.create({
    root:{
        alignItems:'center',
        padding:75,
    },
    
})

export default GameBoard

