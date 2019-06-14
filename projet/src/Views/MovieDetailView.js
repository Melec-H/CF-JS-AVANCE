import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {getBackdropFromApi, getFilmDetailFromApi, getImageFromApi} from "../API/TMDB";
import Header from "../Components/Header";
import Drawer from '../Components/Drawer'


export class MovieDetailView extends Component {

    state = {
        title: null,
        genres: [],
        overview: null,
        poster_path: null,
        production_companies: [],
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
        const { title, genres, overview, poster_path, production_companies, release_date, backdrop_path } = this.state;
        console.log(genres);
        return (
            <div className="App">
                <Drawer/>
                <Header image={getBackdropFromApi(backdrop_path)} />
                <Container fixed>

                    <Grid container spacing={3} direction="column">
                        <Grid item xs={12}>
                            <h1>{title}</h1>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item xs>
                                <img src={getImageFromApi(poster_path)}/>
                            </Grid>
                            <Grid container xs={8}>
                                <Grid container spacing={3} direction="column">
                                    <Grid>
                                        <Grid container spacing={3} direction="row">
                                            <Grid style={{
                                                margin: 10
                                            }}>
                                                <Paper style={{
                                                    padding: 5
                                                }}>

                                                    {genres.map((genre, key) => {
                                                        return `${genre.name} `
                                                    })
                                                    }
                                                </Paper>
                                            </Grid>
                                            <Grid style={{
                                                margin: 10
                                            }}>
                                                <Paper style={{
                                                    padding: 5
                                                }}>
                                                    Release Date: {new Date(release_date).toLocaleDateString()}
                                                </Paper>
                                            </Grid>
                                            <Grid style={{
                                                margin: 10
                                            }}>
                                                <Paper style={{
                                                    padding: 5
                                                }}>
                                                    {production_companies.map((production, key) => {
                                                        return `${production.name}, `
                                                    })
                                                    }
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
            </div>

        )
    }

}