import axios from 'axios'
import {API_TOKEN} from "./TMDB_keys";

export async function getFilmsFromApiWithSearchedText(text, page) {
    const {data} = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
            api_key: API_TOKEN,
            language: 'fr-FR',
            query: text,
            // page: page
        },
    })

    return data
}


export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}


// Récupération du détail d'un film
export function getFilmDetailFromApi(id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
        .then((response) => response.json())
        .catch((error) => console.error(error));
}