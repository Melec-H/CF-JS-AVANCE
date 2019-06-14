import React, { Component } from 'react'
import CardMovie from './CardMovie/CardMovie'
import { getImageFromApi } from '../API/TMDB';
import {Link} from "react-router-dom";
console.log(CardMovie)

export default class List extends Component {

    static defaultProps = {
        items: [],
        onClickCard: () => { }
    }

    cardCreation() {
        const {items} = this.props
        return (items.map( item => (
            <Link to={`/movies/${item.id}`} >
            <CardMovie 
                id={item.id}
                className='card'
                title={item.title}
                releaseYear={item.releaseYear}
                synopsis={item.synopsis}
                poster= {getImageFromApi(item.poster)}
                ></CardMovie>
            </Link>
        )))

    }

    displayCard() {
        let styleDiv = {
            display: 'flex',
            maxWidth: '4000',
            height: '35',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
        }
        return (
            <div style={styleDiv}>
                {this.cardCreation()}
            </div>
        )
    }

    render() {

        return (this.displayCard())
    }
}

