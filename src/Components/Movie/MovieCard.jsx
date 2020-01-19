import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieCard.scss";
import MovieSearch from "./MovieSearch";


const MovieCard = () => {
  const [searchTerm, setSearchTerm] = useState("green");
  const [typed, setTyped] = useState("");
  const [moviesReturned, setMoviesReturned] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [pageNum, setPageNum] = useState(1);





  const API_KEY = process.env.REACT_APP_TMBD_KEY;


  
  useEffect(() => {
 
    const movieDBSearch = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${pageNum}`;
    
   
      axios
        .get(movieDBSearch)
        .then(res => res.data.results)
        .then(res => {
          setMoviesReturned(res)})
        .catch(err => console.error(err, "☹️"));

    return () => {
      
    };
  }, [searchTerm, pageNum, API_KEY]);

 


  const searchForTyped = () => {
    setSearchTerm(typed);
  };

  const storeTypedFx = e => {
    setTyped(e.target.value);
  };

  console.log("after useEffect movies returned: ", moviesReturned);

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

  const moreInfo =(id)=>{
    console.log(id)
    const mDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`;
        axios 
          .get(mDetails)
            .then(res=> res.data)
            .then(res=>
              setMovieDetails([res]));
    console.log('MovieDetails',movieDetails)
  }

  const next = () => {
     setPageNum(pageNum + 1);
      window.scrollTo(0, 0);
  };

  const displayMovies = moviesReturned.map((n, id) => (
    <div key={id}>
      <div onLoad={()=>moreInfo(n.id)} key={id} className="movie-card-container">
        <div className="image-container">
          <img
            className="movie-card-image"
            src={
              typed && moviesReturned && n.poster_path === null
                ? require("../../Assets/greenLanternMWlogo2.jpg")
                : `https://image.tmdb.org/t/p/w500${n.poster_path}`
            }
            alt={n.title}
          />
        </div>
        <div className="movie-info">
          <div className="movie-head-title">{n.title} </div>
          <div className="movie-overview">{n.overview}</div>
          <div className="movie-details">
            <hr />
            This movie was released on {n.release_date}
           { movieDetails ? <div> {movieDetails.map((m, id)=> (
             <div key={id} className='extra-detail-parent'>
              <div>{m.runtime} minute runtime</div>
            {/* <div> {m.credits.crew[0].job} : {m.credits.crew[0].name} </div> 
            <div> {m.credits.crew[1].job} : {m.credits.crew[1].name} </div>
              <div>{m.runtime} minute runtime</div>
              <div>{m.runtime} minute runtime</div> */}

              




           </div> ))} </div> : null}
          </div>
      

        </div>
      </div>
    </div>





  ));
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

      <span>
        "This product uses the TMDb API but is not endorsed or certified by
        TMDb."
      </span>
    </div>
  );
};

export default MovieCard;
