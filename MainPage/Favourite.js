import React, {Component} from 'react'

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableWithoutFeedback, View 
} from "react-native";

import favinfo from './data/favinfo'
import InfoBox from './InfoBox'


const s = StyleSheet.create({ 
    cont: {
        flex: 1,
        padding: 20,
    },

});

class Favourite extends Component{
    constructor(){
        super()
        this.state = {
            fav: favinfo.map(i => {return (<InfoBox name={i.mall} content={i.star} key={i.id} button={this.buttonHandler}/>)})
        }

        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler(){
        console.log('hello')
    }

    render(){
        return(
            <View style={s.cont}>
                {this.state.fav}
            </View>
        )
    }
}

export default Favourite