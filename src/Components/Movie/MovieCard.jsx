import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieCard.scss";

const MovieCard = () => {
  const [searchTerm, setSearchTerm] = useState("green");
  const [typed, setTyped] = useState("");
  const [moviesReturned, setMoviesReturned] = useState([]);

  useEffect(() => {
    const movieDB = `https://api.themoviedb.org/3/search/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&query=${searchTerm}`;

    axios
      .get(movieDB)
      .then(res => [res.data.results])
      .then(res => setMoviesReturned(res[0]))

      .catch(err => console.error(err, "☹️"));

    return () => {
      console.log("moviesReturned called with this url", console.log(movieDB));
    };
  }, [searchTerm]);

  //const showDetails = moviesReturned.Search.map(movie=> movie.imbID);

  const searchForTyped = () => {
    setSearchTerm(typed);
  };

  const storeTypedFx = e => {
    setTyped(e.target.value);
  };

  console.log("after useEffect movies returned: ", moviesReturned);

  const jump = () => {
    window.scrollTo(0, 0);
  };

  const onEnter = event => {
    if (event.which === 13 || event.keyCode === 13) {
      console.log("onEnter fired");
      searchForTyped(typed);
    }
  };

  const displayMovies = moviesReturned.map((n, id) => (
    <div>
      <div key={id} className="movie-card-container">
        <div className="image-container">
          <img
            className="movie-card-image"
            src={
              typed && moviesReturned && n.poster_path === null
              ? require('../../Assets/greenLanternMWlogo2.jpg')
                : `https://image.tmdb.org/t/p/w500${n.poster_path}`
            }
            alt={n.title}
          />
        </div>
        <div className="movie-info">
          <div className="movie-head-title">{n.title} </div>
          <div className="movie-overview">{n.overview}</div>
        </div>
      </div>




      <div key={id} className="movie-card-container-backside">
         <div className='image-container-backside'>
           <img
            className="movie-card-image-backside"
            src={
              typed && moviesReturned && n.backdrop === null
                ? require('../../Assets/greenLanternMWlogo2.jpg')

                : `https://image.tmdb.org/t/p/w500${n.backdrop_path}`
            }
            alt={n.backdrop_path}
          />
          </div>
        <div className="movie-info-backside">
          <div className="movie-date">
            Release Date: {""}
            {n.release_date}
          </div>
          <div className="movie-genre">{n.genre_ids}</div>
          <div className="movie-head-3">Mass Movie Search</div>
          <div className="movie-popularity">{n.popularity}</div>
        </div>
    </div>
    </div>
  ));
  console.log("one pull: ====> ", moviesReturned);

  return (
    <div className="movieCard-wrapper">
      <div className="movie-housing-container">
        <div className="movie-button--housing">
          <h1>Movie Search</h1>

          <input
            className="search-box"
            placeholder="Search for a Movie"
            onChange={storeTypedFx}
            onBlur={searchForTyped}
            onKeyPress={onEnter}
          />
          <button className="search-button" onSubmit={searchForTyped}>
            Search Movies{" "}
          </button>
          <button className="jump-button" onClick={jump}>
            Jump to Top
          </button>
        </div>

        <div className="rendered-items">{displayMovies}</div>
      </div>

      <span>
        "This product uses the TMDb API but is not endorsed or certified by
        TMDb."
      </span>
      <span>
        "This product uses the TMDb API but is not endorsed or certified by
        TMDb."
      </span>
    </div>
  );
};

export default MovieCard;
