import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';
import { getFilmsFromApiWithSearchedText } from '../API/TMDB'

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class Search extends React.Component {

    state = {
        name : ''
    }


    getSearchedText (event) {
        this.setState(
            {name : event.target.value}
        )
        console.log(this.state.name)

    }


    async loadFilms() {
        if(this.state.name) {
            await getFilmsFromApiWithSearchedText(this.state.name, 0)
        }
    }

    render () {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Rechercher"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        onChange={(x)=>{this.getSearchedText(x)}}
                    />
                    {this.loadFilms()}
                </ThemeProvider>
            </div>

        )
    }
}

export default Search

