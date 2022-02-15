import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/signin';
import HomeScreen from '../HomeScreen';
import Chat from '../screens/chat';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                
                <Stack.Screen name="Chat Room" component={SignInScreen}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen 
                name="Chat" 
                component={Chat}
                options={({route})=>({
                    title:route.params.id,
                })}/>
                
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}

export default Navigation;
