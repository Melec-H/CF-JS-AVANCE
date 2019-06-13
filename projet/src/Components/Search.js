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
        name : 'star wars'
    }



    loadFilms() {
        getFilmsFromApiWithSearchedText(this.state.name)
    }

    render () {
        console.log(this.loadFilms())
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Rechercher"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        onChange={()=>{console.log('coucou')}}
                    />
                </ThemeProvider>
            </div>
        )
    }
}

export default Search

