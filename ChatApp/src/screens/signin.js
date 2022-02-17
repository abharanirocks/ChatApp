import React,{useState} from 'react'
import { View, ScrollView,Image, StyleSheet, useWindowDimensions } from 'react-native'
import CustomInput from '../component/custominput';
import CustomButton from '../component/custombutton';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const {height} = useWindowDimensions();
    

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
    
        {/* <SocialSigninButton/> */}

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

