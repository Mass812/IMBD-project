import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';  
import '../../MovieThumb.scss';



 const NewlyReleased =( )=>{

    const [nowPlaying, setNowPlaying] = useState([]);

  
    useEffect(() => {
   //   https://api.themoviedb.org/3/movie/now_playing?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&region=US      const pullNewReleases = `https://api.themoviedb.org/3/discover/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
      const pullNowPlaying = `https://api.themoviedb.org/3/trending/all/day?api_key=2121f2ad7169f32e4b2cab5cf77d32cd`;
  
      axios
        .get(pullNowPlaying)
        .then(res => res.data.results)
        .then(res => {
          setNowPlaying(res);
        })
        .catch(err => console.error(err, "☹️"));
  
      return () => {
        console.log("left area use effect fired", );
      };
    }, []);
  
    console.log('nowPlaying returning as: ', nowPlaying)

    const displayNowPlaying = nowPlaying.map((n, idx) => (
        <Link  key={n.id}to={`/movie_detail/${n.id}`}>
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



        return (
            <div className="movieCard-wrapper">
             
        
                <div className="rendered-items">
              
                   {displayNowPlaying} 
                </div>
            
              </div>
        
             
         
          );
        };
export default NewlyReleased;