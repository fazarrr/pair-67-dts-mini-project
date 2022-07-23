import React, { useEffect, useState } from "react";
import MovieSlider from "../components/MovieSlider";
import MovieDetail from "../components/MovieDetail";
import tmdb from "../apis/Tmdb";
import { useParams } from "react-router-dom";

export const DetailTv = () => {
  let params = useParams();

  const [series, setSeries] = useState([]);
  const [popular, setPopular] = useState([]);
  const [tv, setTv] = useState([]);

  const idMovie = params?.id;

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const fetchedTv = await tmdb.get(`tv/${idMovie}`);
        setTv(fetchedTv.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTv();
  }, [idMovie]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedPopular = await tmdb.get("tv/popular");
        const fetchedSeries = await tmdb.get("trending/tv/week");
        setPopular(fetchedPopular.data.results);
        setSeries(fetchedSeries.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    console.log(popular);

    fetchMovies();
  }, [popular]);

  return (
    <>
      <MovieDetail data={tv} />
      <MovieSlider data={series} title={"Trending this week"} />
      <MovieSlider data={popular} title={"Popular Series"} original={true} />
    </>
  );
};
