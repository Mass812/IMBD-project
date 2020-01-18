import React, {useState, useEffect} from 'react';
import axios from 'axios';




const MovieCardBackside =()=>{




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




    return(


        <div className="movie-card-container-backside">
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

    )
}


export default MovieCardBackside;