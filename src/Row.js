import React, { useState, useEffect } from "react";
import inst from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, reqURL, useBackdrop }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieData(reqURL);
  }, [reqURL]);

  const getMovieData = async (reqURL) => {
    const respData = await inst.get(reqURL);
    setMovies(respData.data.results);
  };

  return (
    <div className="row">
      <h3 className="row__title">{title}</h3>
      <div className="row__movies">
        {movies.map((mov) => (
          <img
            key={mov.id}
            className="row__image"
            src={`${base_url}${
              useBackdrop ? mov.backdrop_path : mov.poster_path
            }`}
            alt={mov.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
