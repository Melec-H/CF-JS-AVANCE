import React, { Component } from 'react'
import Search from '../Components/Search'
import Drawer from '../Components/Drawer'
import Header from "../Components/Header";
import List from '../Components/List.js'

export class MoviesView extends Component{



    state = {
        list: []
    }

    logComplete(list) {
        this.setState({list})

    }

    logItem(item) {
        return this.state;
    }

    render () {

        return (
            <div className="App">
                <Drawer/>
                <Header/>
                <Search onComplete={this.logComplete.bind(this)}/>
                <List items = {this.state.list} ></List>
            </div>
        )
    }
}

//onClickCard={this.logItem}