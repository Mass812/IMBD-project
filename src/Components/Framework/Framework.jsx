import React from 'react';
import './Framework.scss';
import MovieCard from '../Movie/MovieCard';
import LeftSection from '../LeftSection/LeftSection';

const Framework = () => {
  const greenLanternLogo = require('../../Assets/greenLanternMWlogo2.jpg');

  return (
    <div className='framework-container'>
      <header className='framework-header'>
      <div className='framework-under-header' />
        <div className='tmbd-issue'>
          "I use the TMDb API, this site's not endorsed or certified by TMDb."
        </div>
        <img
          className='greenLantern'
          src={greenLanternLogo}
          alt={'Matt Wellman Logo'}
        />
        <div className='title-top'>Movie</div> 
        <div className='title-bottom'>Warehouse</div>
      <div className='framework-under-header' />
      </header>
      <div className='framework'>
        <section className='framework-section-one'>
          {' '}
          New & Trending <br/>
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
