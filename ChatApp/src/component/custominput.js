import React from 'react'
import { View, Text, TextInput,StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder,secureTextEntry,type="PRIMARY",borderRadius,multiline}) => {
    return (
        <View style={[styles.container, styles[`container_${type}`],borderRadius ? {borderRadius:borderRadius}:{}]}>
           <TextInput 
           value={value}
           onChangeText={setValue}
           placeholder={placeholder} 
           style={styles.input}
           multiline={true}
           secureTextEntry={secureTextEntry}/> 
        </View>
    )
}

const styles =StyleSheet.create({
    container:{ 
        backgroundColor:"#e8e8ee",
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth: 1,

        paddingHorizontal:10,
        marginVertical:8,

    },
    input:{},
    container_PRIMARY:{
        borderRadius:7,

    },
    container_SECONDARY:{
        borderRadius:50,
        justifyContent:'center',
        height:'95%',
        padding:10,
    }
    })

export default CustomInput
