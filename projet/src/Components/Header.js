import React, {Component} from 'react'
import header from '../Helpers/Img/header.jpg'


export default class Header extends Component {

    static defaultProps = {
        image: header
    }

    render() {
        return(
            <img src={this.props.image} style={{width: '100%'}}/>
        )
    }
}