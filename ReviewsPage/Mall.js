import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const s = StyleSheet.create({
    cont: {
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 8,
        width: '80%',
        marginHorizontal: 'auto',
        height: '47%',
        flexShrink: 0
    },

    heading: {
        fontSize: 20,
        fontWeight: 500
    },

    descr: {
        fontSize: 15
    },

    img: {
        height: '60%',
        width: '100%'
    },

    textcont: {
        padding: 5,
        height: '35%'
    }

})

class Mall extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <View style={s.cont}>
                <Image style={s.img} source={this.props.img}></Image>
                <View style={s.textcont}>
                    <Text style={s.heading}>{this.props.title}</Text>
                    <Text style={s.descr}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}

export default Mall