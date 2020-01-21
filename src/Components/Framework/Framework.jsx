import React from 'react';
import './Framework.scss';
import MovieCard from '../Movie/MovieCard';
import LeftSection from '../LeftSection/LeftSection';

const Framework = () => {
  const greenLanternLogo = require('../../Assets/greenLanternMWlogo2.jpg');

  return (
    <div className='framework-container'>
      <header className='framework-header'>
        <img
          className='greenLantern'
          src={greenLanternLogo}
          alt={'Matt Wellman Logo'}
        />
        <h1>Movie Warehouse</h1>
        <div className='tmbd-issue'>
          "I use the TMDb API, this site's not endorsed or certified by TMDb."
        </div>
      </header>
      <div className='framework'>
      <div className='framework-under-header' />
        <section className='framework-section-one'>
          {' '}
          New & Trending
          <LeftSection />
         
        </section>
       <section className='framework-section-two'>
           <MovieCard /> 
        </section> 
      </div>
    </div>
  );
};
export default Framework;
