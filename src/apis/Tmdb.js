import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const { REACT_APP_TMDB_API_KEY } = process.env;

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: REACT_APP_TMDB_API_KEY,
  },
});

export default tmdb;
