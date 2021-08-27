import React, {Component} from 'react'

import { 
    StyleSheet, Text, Image,
    ImageBackground, TouchableWithoutFeedback, View 
} from "react-native";

import Recent from './Recent'
import Near from './Near'
import Favourite from './Favourite'

const s = StyleSheet.create({ 
    mainnavcont: {
        flex: 0.45,
        padding: 5,
        paddingBottom: 0
    },   

    active:{
        color: '#00e4fd',
        borderBottomWidth: 1,
        borderBottomColor: '#00e4fd',
        width: "30%",
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 2,
        justifyContent: 'center'
    },

    inactive:{
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: "29%",
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 5,
        justifyContent: 'center'
    },

    btncont:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 2
    }

});

class UserMenu extends Component{

    constructor(){
        super()
        this.state= {
            page: 'recent'
        }

        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler(e){
        var id = e.target.innerHTML

        if (id == 'Recent Activity'){
            this.setState({page:'recent'})
        } else if (id == "Malls Near You"){
            this.setState({page:"near"})
        } else if (id =="Favourited Malls"){
            this.setState({page: 'favourite'})
        }
    }

    render(){

        if (this.state.page == 'recent'){
            var pageItem = <Recent />
        } else if (this.state.page == "near"){
            var pageItem = <Near />
        } else if (this.state.page == "favourite"){
            var pageItem = <Favourite />
        }

        return (
            <View style={s.mainnavcont}>
                <View style={s.btncont}>
                    <Text style={this.state.page=='near'? s.active:s.inactive } onPress={this.buttonHandler}>Malls Near You</Text>
                    <Text style={this.state.page=='recent'? s.active:s.inactive } onPress={this.buttonHandler}>Recent Activity</Text>
                    <Text style={this.state.page=='favourite'? s.active:s.inactive } onPress={this.buttonHandler}>Favourited Malls</Text>
                </View>

                {pageItem}
            </View>
        )
    }
}

export default UserMenu