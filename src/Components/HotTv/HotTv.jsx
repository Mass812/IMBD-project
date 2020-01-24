import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../MovieThumb.scss';


 const HotTv =( )=>{

    const [topRatedTV, setTopRatedTV] = useState([]);

  
    useEffect(() => {
   //   https://api.themoviedb.org/3/movie/now_playing?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&region=US      const pullNewReleases = `https://api.themoviedb.org/3/discover/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
      const topRatedShows = `https://api.themoviedb.org/3/tv/popular?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&language=en-US&page=1`;
  
      axios
        .get(topRatedShows)
        .then(res => res.data.results)
        .then(res => {
          setTopRatedTV(res);
        })
        .catch(err => console.error(err, "☹️"));
  
      return () => {
        console.log("HotTv", topRatedTV );
      };
    }, []);
  
    console.log('Top Rated TV returning as: ', topRatedTV)


const showTopRated = topRatedTV.map((n, idx)=>(
  <Link key={idx}to={`/trending-tv/${n.id}`}>
  <div key={n.id} className='trending-card-body'>
    <div className='trending-photo-body'>
      <img
        className='trending-photo'
        src={`https://image.tmdb.org/t/p/w500${n.poster_path}`}
        alt={n.title}
      />
      <div className='trending'>{!n.title ? 'No Title' : n.title}</div>
    </div>
  </div>
</Link>

))







    return (  
      <div className='movieCard-wrapper'>
      <div className='rendered-items'>{showTopRated}</div>
    </div>
    )
};
export default HotTv;