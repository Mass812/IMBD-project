import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';

import './SpecificMovie.scss';

const SpecificTrendingMovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [videos, setVideos] = useState([]);

  let idParam = useParams();
  let newID = idParam.id.substr(0);
  console.log(idParam, newID);

  const close = () => {
    window.history.back();
  };

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${newID}/videos?api_key=2121f2ad7169f32e4b2cab5cf77d32cd`
    )
      .then(res => res.data.results[0])
      .then(res => {
        if (res.key) {
          setVideos([res.key]);
        }
      })
      .catch(err => console.log(err, 'something wen wrong'));
  }, []);

  useEffect(() => {
    axios
      .get(
        //  `https://api.themoviedb.org/3/movie/38700?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&append_to_response=credits`
        `https://api.themoviedb.org/3/movie/${newID}?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&append_to_response=credits`
      )
      .then(res => setMovieDetails([res.data]))
      .catch(err => console.error('Could not load movieDetails', err));
  }, [newID]);

  console.log(' video State', videos.length, videos);
  console.log('  movieDetails', movieDetails.length, movieDetails);

  const displayMovieDetails = movieDetails.map((n, idx) => (
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
                alt={n.title}
              />
            </div>
            <div className='text-movie-cont'>
              <div className='mr-grid'>
                <div className='col1'>
                  <h1>{n.title}</h1>
                  <ul className='movie-gen'>
                    <li>
                      {n.release_date} <b>/</b>{' '}
                    </li>
                    <li>
                      {n.runtime} minute show time <b>/</b>
                    </li>
                    <li style={{ color: 'teal' }}>"{n.tagline}"</li>
                  </ul>
                </div>
              </div>

              <div className='mr-grid summary-row'>
                <h5>{n.overview}</h5>

                <div className='col2'>
                  <ul className='movie-review'>
                    <li>Rating: {n.vote_average} </li>
                    <li>Popularity: {n.popularity}</li>
                  </ul>
                </div>
              </div>

              <div className='actors-row-parent'>
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
              </div>

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

                  <h4  style={{
                      justifySelf: 'center',
                      textAlign: 'left',
                      paddingTop: '30px',
                      paddingBottom: '30px',
                      color: '#1DC0B8',
                      fontStyle: ' sans-serif'
                    }}>Watch Trailer: </h4>
                {videos.length ? (
                  <ReactPlayer
                    key={videos}
                    url={`https://www.youtube.com/watch?v=${videos}`}
                    height='300px'
                    width='100%'
                    light='true'
                    className='player'
                    style={{
                      justifySelf: 'center',
                      textAlign: 'center',
                      paddingTop: '30px',
                      paddingBottom: '45px'
                    }}
                  />
                ) : (
                  <h5
                    key={videos}
                    style={{
                      justifySelf: 'center',
                      textAlign: 'center',
                      paddingTop: '30%'
                    }}>
                    Sorry, there is no trailer information in the movieDetailsbase for
                    this movie.
                  </h5>
                )}
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div style={{ zIndex: '0' }}>
      <div>{displayMovieDetails}</div>
    </div>
  );
};
export default SpecificTrendingMovieDetails;
