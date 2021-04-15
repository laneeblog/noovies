import axios from 'axios';

const TMDB_KEY = "c98dc6394732d9d8829c7218a3cb53ef";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    })

const getAnything = async (path, params = {}) => {
    try {        
        const { data : {results}, data} = await makeRequest(path, params);  // // results 없을 경우 data도 받아오기
        return [results || data, null]; // results 없으면 data
    } catch (error) {
        return [null, error];
    }
}


export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
    search: query => getAnything("/search/movie", { query }),
    movie: id => getAnything(`/movie/${id}`, {append_to_response: "videos"}),
    discover: () => getAnything("/discover/movie"),
}

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", { query }),
    show: id => getAnything(`/tv/${id}`, {append_to_response: "videos"}),
}

export const apiImage = (path, defaultPoster = "https://cdn1.vectorstock.com/i/1000x1000/53/05/blue-water-splash-isolated-over-white-vector-10785305.jpg") => path ? `https://image.tmdb.org/t/p/w500/${path}` : defaultPoster;