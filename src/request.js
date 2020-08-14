const APIKEY = "2090c511d2b9d7b5de054b89455a777e";

const reqs = {
    getTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    getNLFXOGs: `/discover/tv?api_key=${APIKEY}&with_network=213`,
    getTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    getActiMovies: `/discover/movie?api_key=${APIKEY}&with_genre=28`,
    getComMovies: `/discover/movie?api_key=${APIKEY}&with_genre=35`,
    getHorrMovies: `/discover/movie?api_key=${APIKEY}&with_genre=27`,
    getRomMovies: `/discover/movie?api_key=${APIKEY}&with_genre=10749`,
    getDocMovies: `/discover/movie?api_key=${APIKEY}&with_genre=99`
}

export default reqs;