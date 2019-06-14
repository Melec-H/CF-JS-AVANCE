import React, { Component } from 'react'
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

    static defaultProps = {
        items: [],
        onClickCard: () => { }
    }

    cardCreation() {

        return this.props.items.map(item => (
            <CardMovie id={item.id}
                className='card'
                title={item.title}
                releaseYear={item.releaseYear}
                synopsis={item.synopsis}
                poster={item.poster}
                onClick={() => {console.log('item', item);this.props.onClickCard(item)}}></CardMovie>
        ))

    }

    displayCard() {
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

