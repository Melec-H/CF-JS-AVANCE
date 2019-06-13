import React, { Component } from 'react'
import Search from './Components/Search'
import Drawer from './Components/Drawer'
import './App.css';
import Header from "./Components/Header";

class App extends Component{

    logComplete(list) {
        console.log('=====> App', list)
    }

    render () {
        return (
            <div className="App">
                <Drawer/>
                <Header/>
                <Search onComplete={this.logComplete()}/>
            </div>
        )
    }

}

export default App;
