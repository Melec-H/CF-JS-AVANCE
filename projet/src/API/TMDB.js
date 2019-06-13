import axios from 'axios'
import {API_TOKEN} from './TMDB_key'


// API/TMDBApi.js

export async function getFilmsFromApiWithSearchedText (text, page) {
    const {data} = await axios.get( 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page)
    return data
}

export function getImageFromApi (name) {
    return `https://image.tmdb.org/t/p/w300${name}`
}

// API/TMDBApi.js

// Récupération du détail d'un film
export async function getFilmDetailFromApi (id) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`);

    return data;
}