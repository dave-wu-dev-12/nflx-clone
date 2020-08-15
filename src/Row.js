import React, { useState, useEffect } from "react";
import inst from "./axios";
import "./Row.css";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";
const movieTrailer = require("movie-trailer");
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function Row({ title, reqURL, useBackdrop }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailer] = useState("");

  useEffect(() => {
    getMovieData(reqURL);
  }, [reqURL]);

  const getMovieData = async (reqURL) => {
    const respData = await inst.get(reqURL);
    setMovies(respData.data.results);
  };

  const handleTrailer = (mov) => {
    if (trailerURL) {
      setTrailer("");
    } else {
      movieTrailer(mov?.name || mov?.original_name || mov?.title)
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailer(urlParam.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h3 className="row__title">{title}</h3>
      <div className="row__movies">
        {movies.map((mov) => (
          <img
            onClick={() => handleTrailer(mov)}
            key={mov.id}
            className="row__image"
            src={`${base_url}${
              useBackdrop ? mov.backdrop_path : mov.poster_path
            }`}
            alt={mov.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
