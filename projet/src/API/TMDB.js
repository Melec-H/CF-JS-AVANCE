import axios from 'axios'
import {API_TOKEN} from "./TMDB_key";

export async function getFilmsFromApiWithSearchedText(text, page) {
    const {data: {results}} = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: API_TOKEN,
            language: 'fr-FR',
            query: text,
            // page: page
        },
    })

    return results.map(tmdbMovie => {
        return {
            id: tmdbMovie.id,
            title: tmdbMovie.title,
            synopsis: tmdbMovie.overview,
            poster: tmdbMovie.poster_path,
            release: tmdbMovie.release_date
        }
    })
}


export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}

export function getBackdropFromApi(name) {
    return `https://image.tmdb.org/t/p/original${name}`
}


// Récupération du détail d'un film
export async function getFilmDetailFromApi (id) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`);

    return data;
}