import React, {Component, useState, useEffect} from 'react'

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableWithoutFeedback, View 
} from "react-native";

const s = StyleSheet.create({     
    image: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    }, 

    header: {
        fontSize: 25,
        color: 'white',
        marginBottom: 30,
        marginTop: 5,
        zIndex: 4
    },

    other: {
        fontSize: 15,
        color: 'white',
        zIndex: 4
    },
    
    overlay:{
       backgroundColor: 'rgba(0,0,0,0.3)',
       position: 'absolute',
       width: '100%',
       height: '100%'
    },
});

var images = [require('../assets/home/wheelchair1.jpg'), require('../assets/home/wheelchair2.jpg')]
var i = 0

function Welcome(props){

    const [background, setBackground] = useState(images[i]);

    useEffect(() => {
        const interval = setInterval(() => {
            i++ 
            if (i == images.length){
                i = 0
            }

            setBackground(images[i]);
        }, 10000);
     
        // This is important, you must clear your interval when component unmounts
        return () => clearInterval(interval);
     
     }, []) 

    return (
        <ImageBackground style={s.image} source={background}>
            <Text style={s.other}>September 1, 2021</Text>
            <Text style={s.header}>Welcome Back {props.user}!</Text>
            <Text style={s.other}>You are currently visiting {props.location}.</Text>
            <View style={s.overlay}></View>
        </ImageBackground>
    )
}

export default Welcome