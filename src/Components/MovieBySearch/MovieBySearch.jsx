import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../MovieThumb.scss'
import MovieSearch from "../MovieSearchBar/MovieSearch";
import {Link} from 'react-router-dom';

const MovieBySearch = () => {
  const [searchTerm, setSearchTerm] = useState("avengers");
  const [typed, setTyped] = useState("");
  const [moviesReturned, setMoviesReturned] = useState([]);
  const [pageNum, setPageNum] = useState(1);

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
  }, [searchTerm, pageNum]);



  const displayMovies = moviesReturned.map((n, idx) => (
    <Link to={`/movie_detail/${n.id}`}>
        <div key={n.id} className="trending-card-body">
          <div className="trending-photo-body">
            <img
              className="trending-photo"
              src={ n.poster_path === null
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

export default MovieBySearch;
