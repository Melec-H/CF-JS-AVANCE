import React, {Component} from 'react'
import '../App.css'

export default class SavedList extends Component {


    componentDidUpdate() {
    }

    renderList() {
        const {list} = this.props

        return list.map((time, index) => (
        <tr key={index}>
            <td>
                {time.name}
            </td>
            <td>
                {time.minutes}
            </td>
            <td>
                {time.seconds}
            </td>
            <td>
             {time.miliseconds}
            </td>
     
        </tr>
        ))
    
    }

    render() {
       
        return (
            <div className="boxBoard">
            <table className="board">
                 <tbody>
                <tr>
                    <th>Noms</th>
                    <th>Minutes</th>
                    <th>Secondes</th>
                    <th>Milisecondes</th>
                </tr>
               
                {this.renderList()}  
                </tbody>
                  
            </table>
            </div>
        )
    }
}