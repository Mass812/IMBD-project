import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './SpecificMovie.scss';

const SpecificTrendingMovieDetails = () => {
  const [showDetails, setShowDetails] = useState([]);

  let idParam = useParams();
  let newID = idParam.id.substr(0);
  console.log(idParam, newID);

  const close = () => {
    window.history.back();
  };


  useEffect(() => {
    axios
      .get(
        //  `https://api.themoviedb.org/3/movie/38700?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&append_to_response=credits`
        `https://api.themoviedb.org/3/tv/${newID}?api_key=2121f2ad7169f32e4b2cab5cf77d32cd`
        )
      .then(res => setShowDetails([res.data]))
      .catch(err => console.error('Could not load movieDetails', err));
  }, [newID]);

  console.log(' Hot TV State', showDetails.length, showDetails);

  const displayShowDetails = showDetails.map((n, idx) => (
    <div key={idx} className='specific-container'>
      <div className='container'>
        <div className='cellphone-container'>
          <div className='movie'>
            <div className='movie-img'>
              <img
                className='specific-backdrop'
                src={
                  n.backdrop_path === null
                    ? require('../../Assets/greenLanternMWlogo2.jpg')
                    : `https://image.tmdb.org/t/p/w500${n.backdrop_path}`
                }
                alt={n.name}
              />
            </div>
            <div className='text-movie-cont'>
              <div className='mr-grid'>
                <div className='col1'>
                  <h1>{n.name}</h1>
                  <ul className='movie-gen'>
                    <li>
                      {n.number_of_seasons} Seasons <b>/</b>{' '}
                    </li>
                    <li >
                      {n.number_of_episodes} Episode's <b>/</b>
                    </li>
                              
                      <li style={{color: 'teal'}}>
                       {n.networks[0].name} 
                      </li>     
                    
                  </ul>
                </div>
              </div>

        <img className='on-casting-image' src={ n.backdrop_path === null
                    ? require('../../Assets/greenLanternMWlogo2.jpg')
                    : `https://image.tmdb.org/t/p/w500${n.last_episode_to_air.still_path}`} alt={'episode'}/>
              <div className='mr-grid summary-row'>
              <h3> Last Episode Aired: {n.last_episode_to_air.air_date} </h3>
              <h2 style={{ color: 'teal', fontWeight: '200'}}>{n.last_episode_to_air.name} </h2>
                <h5>{n.last_episode_to_air.overview}</h5>

                <div className='col2'>
                  <ul className='movie-review'>
                    <li>Rating: {n.vote_average} </li>
                    <li>Popularity: {n.popularity}</li>
                  </ul>
                </div>
              </div>

              <div className='mr-grid summary-row'>
              <h2 style={{ color: 'teal', fontWeight: '200'}}>Series Overview</h2>
                <h5>{n.overview}</h5>

             
              </div>

              {/* <div className='actors-row-parent'>
                {n.credits.cast.map((el, ind) => (
                  <section key={ind} className='actors-row-box'>
                    <div className='actors-box'>
                      <img
                        className='cast-image'
                        alt={'cast actor'}
                        src={
                          el.profile_path === null
                            ? require('../../Assets/greenLanternMWlogo2.jpg')
                            : `https://image.tmdb.org/t/p/w500${el.profile_path}`
                        }
                      />
                      <span className='movie-actors'>{el.name}</span>
                    </div>
                  </section>
                ))}
              </div> */}

              <div
                style={{
                  color: '#16BFCC',
                  paddingTop: '40px',
                  margin: '5px',
                  fontSize: '16px'
                }}>
                {' '}
                <h1 id='close' onClick={close}>
                  close
                </h1>
                Production Companies:
                {n.production_companies.map((el, ind) => (
                  <section
                    key={ind}
                    style={{ color: 'white', paddingTop: '15px' }}>
                    <div style={{ color: 'white' }}>{el.name}</div>
                  </section>
                ))}
              </div>

              {/* <h4
                style={{
                  justifySelf: 'center',
                  textAlign: 'left',
                  paddingTop: '30px',
                  paddingBottom: '30px',
                  color: '#1DC0B8',
                  fontStyle: ' sans-serif'
                }}>
                Watch Trailer:{' '}
              </h4> */}
         
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div style={{ zIndex: '0' }}>
      <div>{displayShowDetails}</div>
    </div>
  );
};
export default SpecificTrendingMovieDetails;
