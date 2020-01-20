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
        <h1>
        Movie Warehouse
        </h1>
        <span>
        "This product uses the TMDb API but is not endorsed or certified by
        TMDb."
      </span>
      </header>
      <div className='framework-under-header' />
      <div className='framework'>
        <section className='framework-section-one'>
          {' '}
          New & Trending
          <LeftSection />
        </section>
        <section className='framework-section-two'>
          Section 2: Highest Grossing Rated
          <MovieCard />
        </section>
      </div>
      <div className='framework-section-main'>
      
      </div>
    </div>
  );
};
export default Framework;
