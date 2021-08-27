import React from "react";

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableWithoutFeedback, View 
} from "react-native";

const s = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  }, 

  heading: {
      fontFamily: "Arial",
      fontSize: 20,
      color: 'white'
  }
});

function WelcomeScreen() {
  return (
    <ImageBackground style={s.background}source={require('./assets/Capture.png')}>

        <Text style={s.heading}>Accessibility Begins Here.</Text>
    </ImageBackground>
  )
}

export default WelcomeScreen