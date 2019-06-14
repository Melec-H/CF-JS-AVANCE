import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List.js'

function App() {

  const items = [
    { id: 1, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140' },
    { id: 2, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140' },
    { id: 3, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140' },
    { id: 4, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140' },
    { id: 5, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140' },
    { id: 6, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140' },
    { id: 6, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140' },
    { id: 7, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140' },
    { id: 8, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140' },
    { id: 9, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140' },
    { id: 10, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140' },
    { id: 11, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140' }
]

  function logItem(item) {
    console.log("===>", item)
  }
  return (
    <div className="App">
      <List items = {items} onClickCard={logItem}></List>
    </div>
  );
}

export default App;
