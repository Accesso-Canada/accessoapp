import React, {Component} from 'react'

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableWithoutFeedback, View 
} from "react-native";

import info from './data/nearinfo'

import InfoBox from './InfoBox'


const s = StyleSheet.create({ 
    cont: {
        flex: 1,
        padding: 20,
    },
});

class Near extends Component{
    constructor(){
        super()
        this.state = {
            nearinfo: info.map(i => {return (<InfoBox key={i.id} name={i.mall} content={i.dist} button={this.buttonHandler}/>)}),
        }

        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler(){
        console.log('hello')
    }

    render(){
        return(
            <View style={s.cont}>
                {this.state.nearinfo}
            </View>
        )
    }
}

export default Near