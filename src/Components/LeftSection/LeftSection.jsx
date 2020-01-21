import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeftSection.scss';
import { Link } from 'react-router-dom';

const LeftSection = () => {
  const [newlyReleased, setNewlyReleased] = useState([]);

  const API_KEY = process.env.REACT_APP_TMBD_KEY;
  useEffect(() => {
    // const pullNewReleases = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
    const pullNewReleases = `https://api.themoviedb.org/3/discover/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
    //const pullNewReleases = `https://api.themoviedb.org/3/trending/all/day?api_key=2121f2ad7169f32e4b2cab5cf77d32cd`;

    axios
      .get(pullNewReleases)
      .then(res => res.data.results)
      .then(res => {setNewlyReleased(res)})
      .catch(err => console.error(err, '☹️'));

    return () => {
      console.log('left area use effect fired');
    };
  }, []);

  console.log('new and trending', newlyReleased);

  const nowTrending = newlyReleased.map((n, idx) => (
    <Link to={`/trending/${n.id}`}>
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
  ));

  return (
    <div>
      <div> {nowTrending} </div>
    </div>
  );
};
export default LeftSection;
