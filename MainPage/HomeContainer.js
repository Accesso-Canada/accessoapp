import React, {Component} from 'react'

import { 
    StyleSheet, Text, Image,
     View 
} from "react-native";

import Welcome from './Welcome'
import UserMenu from './UserMenu'
import Nav from './Nav'

const s = StyleSheet.create({

    pagecontainer: {
        flex: 1,
        justifyContent: 'space-between'

    }

});

class HomeContainer extends Component{

    constructor(){
        super()
        this.state ={
            user: 'Omer',
            page: "Home",
            location: "Fairview Mall"
        }
    }

    render(){
        return(
            <View style={s.pagecontainer}>
                <Welcome location={this.state.location} user={this.state.user} />
                <UserMenu />
                <Nav page={this.state.page}/>
            </View>
        )
    }
}

export default HomeContainer