import React, { useState,useEffect,useRef} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,SafeAreaView } from 'react-native';
// import {io} from "socket.io-client"
import SignInScreen from './src/screens/signin';
import Navigation from './src/Navigation';



export default function App() {

  

    
  return (
   
    <SafeAreaView style={styles.container}>
    
  <Navigation/>

    </SafeAreaView>  
    /*<TextInput
          style={{ height: 40, borderWidth: 2 }}
          autoCorrect={false}
          value={messages}
          onSubmitEditing={() => submitChatMessage()}
          onChangeText={chatMessage => {
            {setChat};
          }}
        />
      <Text>Chat Application!</Text>*/

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});

// import React, { Component } from "react";
// import { TextInput, StyleSheet, Text, View } from "react-native";
// import {io} from "socket.io-client";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chatMessage: "",
//       chatMessages: []
//     };
//   }

//   componentDidMount() {
//     this.socket = io("http://192.168.0.27:3001");
//     this.socket.on("chat message", msg => {
//       this.setState({ chatMessages: [...this.state.chatMessages, msg] });
//     });
//   }

//   submitChatMessage() {
//     this.socket.emit("chat message", this.state.chatMessage);
//     this.setState({ chatMessage: "" });
//   }

//   render() {
//     const chatMessages = this.state.chatMessages.map(chatMessage => (
//       <Text key={chatMessage}>{chatMessage}</Text>
//     ));

//     return (
//       <View style={styles.container}>
      
//         <TextInput
//           style={{ height: 40, borderWidth: 2 }}
//           autoCorrect={false}
//           value={this.state.chatMessage}
//           onSubmitEditing={() => this.submitChatMessage()}
//           onChangeText={chatMessage => {
//             this.setState({ chatMessage });
//           }}
//         />
//         {chatMessages}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent:'center',
//     flex: 1,
//     backgroundColor: "#F5FCFF"
//   }
// });