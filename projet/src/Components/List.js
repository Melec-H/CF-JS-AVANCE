import React, { Component } from 'react'
import CardMovie from './CardMovie/CardMovie'
import { makeStyles } from '@material-ui/core/styles';
import { getImageFromApi } from '../API/TMDB';
console.log(CardMovie)

export default class List extends Component {

    static defaultProps = {
        items: [],
        onClickCard: () => { }
    }

    cardCreation() {
        const {items} = this.props

        console.log(items)

        return (items.map( item => (
            <CardMovie 
                id={item.id}
                className='card'
                title={item.title}
                releaseYear={item.releaseYear}
                synopsis={item.synopsis}
                poster= {getImageFromApi(item.poster)}
                onClick={() => {console.log('item', item);this.props.onClickCard(item)}}></CardMovie>
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

