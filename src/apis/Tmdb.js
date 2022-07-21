import axios from "axios";

// Di sini kita membuat instance dari axios
const Tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // baseURL: "https://api.themoviedb.org/3/movie/550?api_key=e4bc0792414aae7b077105294c19d955",
  params: {
    // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
    api_key: "e4bc0792414aae7b077105294c19d955",
  },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default Tmdb;