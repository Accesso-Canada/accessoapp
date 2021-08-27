import React, {Component} from 'react'

import {FontAwesome, FontAwesome5} from '@expo/vector-icons'

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableOpacity, View, Button
} from "react-native";

const s = StyleSheet.create({ 
    navigation:{
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    box: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    active: {
        color: '#00e4fd',
    },

    inactive: {
        color: 'black'
    },
    
});

class Nav extends Component{

    constructor(){
        super()
        this.state= {}
    }

    render(){
        return (
            <View style={s.navigation}>
                <TouchableOpacity style={s.box}>
                    <FontAwesome name="map" size={20} style={this.props.page=="Map" ? s.active: s.inactive}/>
                    <Text  style={this.props.page=="Map" ? s.active: s.inactive}>Map</Text>
                </TouchableOpacity>

                <TouchableOpacity style={s.box}>
                    <FontAwesome name="home" size={25} style={this.props.page=="Home" ? s.active: s.inactive}/>
                    <Text  style={this.props.page=="Home" ? s.active: s.inactive}>Home</Text>
                </TouchableOpacity>
                

                <TouchableOpacity style={s.box}>
                    <FontAwesome5 name="store-alt" size={20} style={this.props.page=="Reviews" ? s.active: s.inactive} />     
                    <Text  style={this.props.page=="Reviews" ? s.active: s.inactive}>Store Reviews</Text>               
                </TouchableOpacity>
            </View>
        )
    }
}

export default Nav