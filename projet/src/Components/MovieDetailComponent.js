import React, {Component} from "react";
import "../Styles/DetailsMovie.css"
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



class MovieDetailComponent extends  Component {

    render() {
        return(
        <Container fixed>
                <Grid container spacing={3} direction="column">
                    <Grid item xs={12}>
                        <h1>Hello</h1>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs direction="row">
                            <img src="https://placekitten.com/250/350"  />
                        </Grid>
                        <Grid xs={9} >
                            <Grid container spacing={3} direction="column">
                                <Grid>
                                <Grid container spacing={3} direction="row">
                                    <Grid  style={{
                                        margin: 10
                                    }}>
                                    <Paper style={{
                                        padding: 5
                                    }}>
                                        Horreur/Frisson/Thriller
                                    </Paper>
                                    </Grid>
                                    <Grid  style={{
                                        margin: 10
                                    }}>
                                        <Paper style={{
                                            padding: 5
                                        }}>
                                            Release Date: 2010
                                        </Paper>
                                    </Grid>
                                    <Grid  style={{
                                        margin: 10
                                    }}>
                                        <Paper  style={{
                                            padding: 5
                                        }}>
                                            Lion's Gate / HBO
                                        </Paper>
                                    </Grid>
                                    <Grid>
                                        <Paper style={{
                                            padding: 10
                                        }}>I guess if you want children beaten, you have to do it yourself. I just told you! You've killed me! And so we say goodbye to our beloved pet, Nibbler, who's gone to a place where I, too, hope one day to go. The toilet.
                                            <p>Guards! Bring me the forms I need to fill out to have her taken away! Fry! Quit doing the right thing, you jerk! Fetal stemcells, aren't those controversial? Why, those are the Grunka-Lunkas! They work here in the Slurm factory.</p>
                                            <p>No. We're on the top. Fry! Stay back! He's too powerful! I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'!</p>
                                            <p>I saw you with those two "ladies of the evening" at Elzars. Explain that. But, like most politicians, he promised more than he could deliver. Say what? Oh Leela! You're the only person I could turn to; you're the only person who ever loved me.</p>
                                            <p>Yes. You gave me a dollar and some candy. Now, now. Perfectly symmetrical violence never solved anything. You mean while I'm sleeping in it? Shut up and take my money! Are you crazy? I can't swallow that.</p></Paper>
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