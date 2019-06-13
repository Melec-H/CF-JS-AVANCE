import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {getFilmDetailFromApi} from "../API/TMDB";


export class MovieDetailView extends Component {

    state = {
        title: null,
        genres: null,
        overview: null,
        poster_path: null,
        production_companies: null,
        release_date: null
    }

    componentDidMount() {
        this.getFilm(this.props.match.params.movieId);
    }

    async getFilm(id) {
        const response = await getFilmDetailFromApi(id);

        this.setState(response);
        return response;

    }

    render() {
        console.log(this.state);
        const { title, genres, overview, poster_path, production_companies, release_date } = this.state;
        return (
            <Container fixed>
                <Grid container spacing={3} direction="column">
                    <Grid item xs={12}>
                        <h1>{title}</h1>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs>
                            <img src="https://placekitten.com/250/350"/>
                        </Grid>
                        <Grid container xs={9}>
                            <Grid container spacing={3} direction="column">
                                <Grid>
                                    <Grid container spacing={3} direction="row">
                                        <Grid style={{
                                            margin: 10
                                        }}>
                                            <Paper style={{
                                                padding: 5
                                            }}>
                                                Horreur/Frisson/Thriller
                                            </Paper>
                                        </Grid>
                                        <Grid style={{
                                            margin: 10
                                        }}>
                                            <Paper style={{
                                                padding: 5
                                            }}>
                                                Release Date: 2010
                                            </Paper>
                                        </Grid>
                                        <Grid style={{
                                            margin: 10
                                        }}>
                                            <Paper style={{
                                                padding: 5
                                            }}>
                                                Lion's Gate / HBO
                                            </Paper>
                                        </Grid>
                                        <Grid>
                                            <Paper style={{
                                                padding: 10
                                            }}>{overview}</Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }

}