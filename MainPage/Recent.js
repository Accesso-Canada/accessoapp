import React, {Component} from 'react'

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableWithoutFeedback, View 
} from "react-native";

import info from './data/recentinfo'

import InfoBox from './InfoBox'


const s = StyleSheet.create({ 
    cont: {
        flex: 1,
        padding: 20,
    },
});

class Recent extends Component{
    constructor(){
        super()
        this.state = {
            recent_actvity: info.map(i => {return (<InfoBox name={i.mall} key={i.id} content={i.date} button={this.buttonHandler}/>)}),
        }

        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler(){
        console.log('hello')
    }

    render(){
        return(
            <View style={s.cont}>
                {this.state.recent_actvity}
            </View>
        )
    }
}

export default Recent