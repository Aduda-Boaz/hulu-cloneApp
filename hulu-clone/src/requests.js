const API_KEY = '<dd7817621f8b00d3b81cef8db4b346ed>';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languge=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&width_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&width_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&width_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&width_genres=16`,
    fetchTvSeries: `/discover/movie?api_key=${API_KEY}&width_genres=10770`,
}