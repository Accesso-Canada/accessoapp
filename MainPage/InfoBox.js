import React from 'react'

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableWithoutFeedback, View 
} from "react-native";

const s = StyleSheet.create({ 
    cont: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius: 5,
        borderWidth: 0.5,
        height: '15%',
        alignItems: 'center',
        marginBottom: 15
    },

    subcont:{
        flexDirection: 'row',
        padding:10,
        justifyContent: "space-between",
        width: '90%',

    },

    image: {
        width: '8%',
        height: '95%'
    },

    text: {
        fontSize: 15,
        fontWeight: 400
    }

});


function InfoBox(props){
    return(
    <View style={s.cont}>
        <View style={s.subcont}>
            <Text style={s.text}>{props.name}</Text>
            <Text style={s.text}>{props.content}</Text>
        </View>
        <Image style={s.image} source={require('../assets/recent_graphic.png')}></Image>
    </View>
    )
}

export default InfoBox