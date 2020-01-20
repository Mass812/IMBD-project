import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SpecificMovie.scss";

const SpecificTrendingMovieDetails = () => {
  const [data, setData] = useState([]);

  let idParam = useParams();
  let newID = idParam.id.substr(0);
  console.log(idParam, newID)

  useEffect(() => {
    axios
      .get(
        //  `https://api.themoviedb.org/3/movie/38700?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&append_to_response=credits`
        `https://api.themoviedb.org/3/movie/${newID}?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&append_to_response=credits`
      )

      .then(res => setData([res.data]))
      .catch(err => console.error("Could not load data"));

    return () => {
      console.log("Specific has fired");
    };
  }, [newID]);

  console.log("useStae data: ", data);
  
  const movieDetails = data.map((n, idx) => (
    <div key={idx} className="specific-container">
<div className="container">
  <div className="cellphone-container">    
  
 
      <div className="movie">       
        <div className="movie-img">         
    <img
      className="specific-backdrop"
      src={
        n.poster_path === null
          ? require("../../Assets/greenLanternMWlogo2.jpg")
          : `https://image.tmdb.org/t/p/w500${n.backdrop_path}`
      }
      alt={n.title}
    /></div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h1>{n.title}</h1>
              <ul className="movie-gen">
                <li>{n.release_date}/</li>
                <li>{n.runtime} minute show time /</li>
                <li style={{color: 'teal'}}>"{n.tagline}"</li>
              </ul>
            </div>
          </div>
          <div className="mr-grid summary-row">
          
              <h5>{n.overview}</h5>
          
            <div className="col2">
               <ul className="movie-review">
                <li >Rating:   {n.vote_average} </li>
                <li>Poularity: {n.popularity}</li>
              </ul>
            </div>
          </div>
          
          <div className="actors-row-parent">
          
          <section className='actors-row-box'>
              <div className='actors-box'>
              <img src={n.credits.cast[0].profile_path === null
                      ? require("../../Assets/greenLanternMWlogo2.jpg")
                      : `https://image.tmdb.org/t/p/w500${n.credits.cast[0].profile_path}`} 
                      style={{hieght:'70px', width: '70px'}}/>
              <span className="movie-actors">{n.credits.cast[0].name}</span>
              </div>
              <div className='actors-box'>
              <img src={n.credits.cast[1].profile_path === null
                      ? require("../../Assets/greenLanternMWlogo2.jpg")
                      : `https://image.tmdb.org/t/p/w500${n.credits.cast[1].profile_path}`} 
                      style={{hieght:'70px', width: '70px'}}/>
              <span className="movie-actors">{n.credits.cast[1].name}</span>
              </div>
              <div className='actors-box'>
              <img src={n.credits.cast[2].profile_path === null
                      ? require("../../Assets/greenLanternMWlogo2.jpg")
                      : `https://image.tmdb.org/t/p/w500${n.credits.cast[2].profile_path}`} 
                      style={{hieght:'70px', width: '70px'}}/>
              <span className="movie-actors">{n.credits.cast[2].name}</span>
              </div>
          </section>
              
              
              
              
              
              
            
          </div>

        </div>
      </div>
  </div>
</div>




   
    </div>
  ));

  return <div>{movieDetails}</div>;
};
export default SpecificTrendingMovieDetails;