import React, { useState, useEffect } from "react";
import inst from "./axios";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ reqURL }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieData(reqURL);
  }, [reqURL]);

  const getMovieData = async (reqURL) => {
    const respData = await inst.get(reqURL);
    setMovie(
      respData.data.results[
        Math.floor(Math.random() * respData.data.results.length - 1)
      ]
    );
  };

  console.log(movie);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${base_url}${movie?.poster_path})`,
      }}
    >
      <div className="banner__text">
        <h1 className="banner__header">
          {movie?.name || movie?.original_name || movie?.title}
        </h1>
        <div class="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Add to My List</button>
        </div>

        <p className="banner__sum">{movie?.overview}</p>
      </div>

      {/* sick gradient  */}

      <div className="banner__fade"></div>
    </div>
  );
}

export default Banner;
