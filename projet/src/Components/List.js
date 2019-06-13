import React, {Component} from 'react'
import CardMovie from './CardMovie/CardMovie'
import { makeStyles } from '@material-ui/core/styles';
console.log(CardMovie)

// const listStyle = makeStyles({
//     styleDiv: {
//         margin: '20px',
//         minWidth: '1000px',
//         height: '200px',
//         flexWrap: 'flex'   
//     },
// });


export default class List extends Component {

    static defaultProps ={
        items: [
            {id: 1, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140'},
            {id: 2, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140'},
            {id: 3, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140'},
            {id: 4, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140'},
            {id: 5, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140'},
            {id: 6, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140'},
            {id: 6, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140'},
            {id: 7, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140'},
            {id: 8, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140'},
            {id: 9, title: 'ParryHotter', releaseYear: '999', synopsis: 'film de magicien', poster: 'https://placekitten.com/345/140'},
            {id: 10, title: 'MereNoelle', releaseYear: '2020', synopsis: 'bientot en salle', poster: 'https://placekitten.com/345/140'},
            {id: 11, title: 'SeinGlinGlin', releaseYear: 'jamais', synopsis: 'même moi j\'ai pas compris', poster: 'https://placekitten.com/345/140'}
        ]
    }

    cardCreation(){
        
        return this.props.items.map(item => (
                    <CardMovie id = {item.id} className='card' title={item.title} releaseYear={item.releaseYear} synopsis={item.synopsis} poster={item.poster}></CardMovie>
            )
        )
        
    }

    displayCard(){
        let styleDiv = {
            display: 'flex',
            maxWidth: '4000',
            height: '35',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            // border: '3px solid red'
        }
        //const classes = listStyle();
        return(
            <div style={styleDiv}>
           {this.cardCreation()}
           </div>
        )
    }

    render(){        

        return(this.displayCard())
    }
}

