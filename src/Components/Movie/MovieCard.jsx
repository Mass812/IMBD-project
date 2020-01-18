import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieCard.scss";
import MovieSearch from './MovieSearch';


const MovieCard = () => {
  const [searchTerm, setSearchTerm] = useState("green");
  const [typed, setTyped] = useState("");
  const [moviesReturned, setMoviesReturned] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const movieDB = `https://api.themoviedb.org/3/search/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&query=${searchTerm}&page=${pageNum}`;

    axios
      .get(movieDB)
      .then(res => [res.data.results])
      .then(res => setMoviesReturned(res[0]))
    
      .catch(err => console.error(err, "☹️"));

    return () => {
      console.log("moviesReturned called with this url", console.log(movieDB));
    };
  }, [searchTerm, pageNum]);

  //const showDetails = moviesReturned.Search.map(movie=> movie.imbID);

  const searchForTyped = () => {
    setSearchTerm(typed);
  };
  
  const storeTypedFx = e => {
    setTyped(e.target.value);
  };

  console.log("after useEffect movies returned: ", moviesReturned);

  const jump = (e) => {
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

  const next =()=>{
   
    return (
      setPageNum(pageNum + 1),
      window.scrollTo(0,0)
      )
  }

  const displayMovies = moviesReturned.map((n, id) => (
    <div key={id} >
      <div key={id} className="movie-card-container">
        <div className="image-container">
              <img
                className="movie-card-image"
                src={ typed && moviesReturned && n.poster_path === null
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
    </div>
  ));
  console.log("one pull: ====> ", moviesReturned);

  return (
    <div className="movieCard-wrapper">
      <div className="movie-housing-container">   
            <MovieSearch  onChange={storeTypedFx}
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
    <button className='backForwardButton' onClick={next}>Next Page</button>
        </div>
      

      <span>
        "This product uses the TMDb API but is not endorsed or certified by
        TMDb."
      </span>
    </div>
  );
};

export default MovieCard;
