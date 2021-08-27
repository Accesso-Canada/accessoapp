import React, {Component} from 'react'

import {View, Text, StyleSheet, FontAwesome} from 'react-native'

import Store from './Store'

import Nav from '../MainPage/Nav'

const s = StyleSheet.create({
    header: {
        fontSize: 37,
    },

    search: {
        width: '90%',
        height: '100%',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#eee',
        padding: 5
    }, 

    titlecont: {
        flex: 0.15,
        alignItems: 'center'
    },

    searchcont: {
        height: 35,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-between'
    },

    icon: {
        backgroundColor: '#eee ',
        color: '#eee'
    },

    scrollcont: {
        flex: 0.75
    },

    largecont: {
        flex: 1
    }

})


class MallTemplate extends Component{
    constructor(){
        import data from this.props.file

        super()
        this.state = {
             stores: data.map(store => {return(<Store title={store.title} comments={store.comments} stars={store.stars}/>)}),
             searchInfo: ''
        }

        this.searchHandler = this.searchHandler.bind(this)
    }

    searchHandler(e){
       var filter = e.target.value
       this.setState({searchInfo:filter})

       var newStores = []

       if (filter == ''){
           this.resetStores()
       } else {
            for (let store in data){
                if (data[store].title.slice(0,filter.length).toLowerCase() == filter){
                    newStores.push(data[store])
                }
            }
            
            this.setState({stores: newStores.map(store => {return(<Store title={store.title} comments={store.comments} stars={store.stars}/>)})})
       }
    }

    resetStores(){
        this.setState({ stores: data.map(store => {return(<Store title={store.title} comments={store.comments} stars={store.stars}/>)})})
    }

    render(){
        return(
            <View style={s.largecont}>
                <View style={s.titlecont}>
                    <View style={s.searchcont}>
                        <FontAwesome name="search" size={20} />
                        <TextInput 
                            style={s.search}
                            placeholder= "Search"
                            onChange={this.searchHandler}
                            value={this.searchInfo}
                        />
                    </View>
                    <Text style={s.header}>{this.props.title}</Text>
                </View>

                <View style={s.scrollcont}>
                    <ScrollView>
                        {this.state.stores}
                    </ScrollView>
                </View>

                <Nav page={this.state.page}/>
            </View>
        )
    }
}   

export default MallTemplate