import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieCard.scss";
import MovieSearch from "./MovieSearch";
import {Link} from 'react-router-dom';

const MovieCard = () => {
  const [searchTerm, setSearchTerm] = useState("avengers");
  const [typed, setTyped] = useState("");
  const [moviesReturned, setMoviesReturned] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [newlyReleased, setNewlyReleased] = useState([]);

  const API_KEY = process.env.REACT_APP_TMBD_KEY;

  useEffect(() => {
    // const pullNewReleases = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
    const pullNewReleases = `https://api.themoviedb.org/3/discover/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    //const pullNewReleases = `https://api.themoviedb.org/3/trending/all/day?api_key=2121f2ad7169f32e4b2cab5cf77d32cd`;

    axios
      .get(pullNewReleases)
      .then(res => res.data.results)
      .then(res => {
        setNewlyReleased(res);
      })
      .catch(err => console.error(err, "☹️"));

    return () => {
      console.log("left area use effect fired");
    };
  }, []);

  useEffect(() => {
    const movieDBSearch = `https://api.themoviedb.org/3/search/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&query=${searchTerm}&page=${pageNum}`;

    axios
      .get(movieDBSearch)
      .then(res => res.data.results)
      .then(res => {
        setMoviesReturned(res);
      })
      .catch(err => console.error(err, "☹️"));

    return () => {};
  }, [searchTerm, pageNum, API_KEY]);

  const nowTrending = newlyReleased.map((n, id) => (
    <Link to={`/trending/${n.id}`}>
      <div key={n.id} className="trending-card-body">
        <div className="trending-photo-body">
          <img
            className="trending-photo"
            src={ typed && moviesReturned && n.poster_path === null
                  ? require("../../Assets/greenLanternMWlogo2.jpg")
                  : `https://image.tmdb.org/t/p/w500${n.poster_path}`}
              alt={n.title}
            />
          <div className="trending">{!n.title ? "No Title" : n.title}</div>
        </div>
      </div>
    </Link>
  ));

  const displayMovies = moviesReturned.map((n, id) => (
    <Link to={`/movie_detail/${n.id}`}>
        <div key={n.id} className="trending-card-body">
          <div className="trending-photo-body">
            <img
              className="trending-photo"
              src={ typed && moviesReturned && n.poster_path === null
                  ? require("../../Assets/greenLanternMWlogo2.jpg")
                  : `https://image.tmdb.org/t/p/w500${n.poster_path}`}
              alt={n.title}
            />
            <div className="trending">{!n.title ? "No Title" : n.title}</div>
          </div>
        </div>
      </Link>
  
    ));

  const searchForTyped = () => {
    setSearchTerm(typed);
  };

  const storeTypedFx = e => {
    setTyped(e.target.value);
  };

  const jump = e => {
    window.scrollTo(0, 0);
    e.target.blur();
  };

  const onEnter = event => {
    if (event.which === 13 || event.keyCode === 13) {
      console.log("onEnter fired");
      searchForTyped(typed);
      event.target.blur();
    }
  };

  const next = () => {
    setPageNum(pageNum + 1);
    window.scrollTo(0, 0);
  };

  


  console.log("one pull: ====> ", moviesReturned);

  return (
    <div className="movieCard-wrapper">
      <div className="movie-housing-container">
        <MovieSearch
          onChange={storeTypedFx}
          onBlur={searchForTyped}
          onKeyPress={onEnter}
          onSubmit={searchForTyped}
        />

        <div className="rendered-items">
          <button className="jump-button" onClick={jump}>
            Jump to Top
          </button>
           {displayMovies} 
        </div>
        <button className="backForwardButton" onClick={next}>
          Next Page
        </button>
      </div>

     
    </div>
  );
};

export default MovieCard;
