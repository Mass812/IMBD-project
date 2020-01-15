import React, { useState, useEffect } from "react";
import axios from "axios";
import './MovieCard.scss';

const MovieCard = () => {
  const [searchTerm, setSearchTerm] = useState("Frozen");
  const [typed, setTyped] = useState('');
  const [moviesReturned, setMoviesReturned] = useState([{'movie': 'Frozen'}]);


  useEffect(() => {
    const movieDB = `https://api.themoviedb.org/3/search/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&query=${searchTerm}`;

    axios
      .get(movieDB)
      .then(res => [res.data.results])
      .then(res=> setMoviesReturned(res[0]))
 
       
      
  
      
      .catch(err => console.error(err, "☹️"));
      
      
      return () => {
        console.log('moviesReturned with focus', );
    };
  }, [searchTerm]);

  //const showDetails = moviesReturned.Search.map(movie=> movie.imbID);

  const searchForTyped = () => {
    setSearchTerm(typed);
  };

  const storeTypedFx = e => {
    setTyped(e.target.value);
  };

console.log('after useEffect movies returned: ', moviesReturned)

const jump =()=>{
  window.scrollTo(0,0)
}



const displayMovies = moviesReturned.map((n,id)=> (

<div key={id} className='movie-card-container'>
<div className = 'image-container'>
<img className='movie-card-image' src={`https://image.tmdb.org/t/p/w500${n.poster_path}`} alt={n.title}/>

</div>
    
  <div className="movie-info">
    <div className="movie-head-title">{n.title} </div>
    <div className="movie-overview">{n.overview}</div>
    <div className="movie-date">Release Date: {''}{n.release_date}</div>
    <div className="movie-genre">{n.genre_ids}</div>
    <div className="movie-head-3">Mass Movie Search</div>
    <div className="movie-popularity">{n.popularity}</div>
  </div>
</div>



  ))
  console.log('one pull: ====> ', moviesReturned)

  return (
    <div className='movie-card--housing-container'>
      <div className="movie-button--housing">
      <h1> 
      Movie Search
      </h1>
        <input
        className='search-box'
          placeholder="Search for a Movie"
          onChange={storeTypedFx}
          onBlur={searchForTyped}
        />
        <button className='search-button' onSubmit={searchForTyped}>Search Movies </button>
        <button className='jump-button' onClick={jump}>Jump to Top</button>
    <div>{displayMovies}</div>
   
      </div>
    </div>
  );
};

export default MovieCard;





