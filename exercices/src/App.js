import React, { Component } from 'react'
import './App.css'
import Chrono from './Components/Chrono'
import SavedList from './Components/SavedList'

class App extends Component {
  state = {
    name : '',
    list : []
  }
  saveTime (hello) {
    // alert('====>'+ JSON.stringify(hello))
    this.setState({ 
      list : [ hello, ...this.state.list ]
    })
  }

  onChangeName (event) {
    this.setState(
        {name : event.target.value}
    )

  }
  yourName () {

  }


  render () {
    console.log(this.state.list)
    return (
      <div className="App">

        <Chrono onSave={(...item)=> this.saveTime(...item)} onPress={this.state.name} ></Chrono>

        <legend>Votre nom : </legend>
        <input type='text' onChange={(x)=>this.onChangeName(x)}></input>
        <SavedList list={this.state.list}/>
      </div>
    )
  }
}

export default App