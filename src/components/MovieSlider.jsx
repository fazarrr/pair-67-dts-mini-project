import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const MovieSlider = ({ data, title, original }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
  const movies = data;
  return (
    <div className="container movie-slider">
      <p className="list-title">{title ? title : "Unamed List"}</p>
      <Slider {...settings}>
        {movies.map((e, i) => {
          return (
            <div
              key={i}
              className={`${original ? "original" : "list"} centered`}
            >
              <Link to={`/${e.first_air_date ? "tv" : "movie"}/${e.id}`}>
                <img
                  className={`slider-image ${original ? "original" : "list"}`}
                  src={`${BASE_IMAGE_URL}${
                    original ? e.poster_path : e.backdrop_path
                  }`}
                  alt={e.title ? e.title : e.name}
                />
                {!original ? (
                  <div>{`${e.title ? e.title : e.name} ${
                    e.release_date ? `(${e.release_date?.split("-")[0]})` : ""
                  }`}</div>
                ) : (
                  ""
                )}
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MovieSlider;
