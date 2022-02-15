import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from './custombutton'

const socialSigninButton = () => {
    const onSignInGoogle= ()=>{
        console.warn("sign in with google");
    }
    const onSignInFacebook= ()=>{
        console.warn("sign in with facebook");
    }
    return (
        <>
        <CustomButton 
        text={"Sign In With Google"} 
        onPress={onSignInGoogle} 
        bgColor="#FAE9EA" 
        fgColor="#DD4D44"/>
        <CustomButton 
        text={"Sign In with Facebook"} 
        onPress={onSignInFacebook} 
        bgColor="#E7EAF4" 
        fgColor="#4765A9"/>
        </>
    )
}

export default socialSigninButton
