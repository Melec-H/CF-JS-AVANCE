import axios from 'axios'


const API_TOKEN = "b4d4c267aea648659aca8853a1f95666";

// API/TMDBApi.js

export async function getFilmsFromApiWithSearchedText (text, page) {
    const {data} = await axios.get( 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page)
    return data
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}

// API/TMDBApi.js

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
        .then((response) => response.json())
        .catch((error) => console.error(error));
}