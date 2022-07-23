import React, { useEffect, useState } from "react";
// import { landscape, portrait } from "../components/DummyData";
import MovieSlider from "../components/MovieSlider";
import MovieDetail from "../components/MovieDetail";
import tmdb from "../apis/Tmdb";
import { useParams } from "react-router-dom";

export const DetailMovie = () => {
  let params = useParams();

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  const idMovie = params?.id;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await tmdb.get(
          `${movie.number_of_season ? "tv" : "movie"}/${idMovie}`
        );
        setMovie(fetchedMovie.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [movie.number_of_season, idMovie]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <MovieDetail data={movie} />
      <MovieSlider title={"Popular Movies"} data={movies} />
      <MovieSlider title={"Portrait Movies"} data={movies} original={true} />
    </>
  );
};
