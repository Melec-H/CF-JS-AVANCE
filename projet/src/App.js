import React from 'react';
import Search from './Components/Search'
import './App.css';

function App() {
    function logComplete(list) {
        console.log('=====> App', list)
    }

    return (
        <div className="App">
            <Search onComplete={logComplete}/>
        </div>
    );
}

export default App;
