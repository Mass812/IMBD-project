import React from 'react';
import './Framework.scss';
import Header from '../Framework/Header/Header';
import MovieBySearch from '../MovieBySearch/MovieBySearch';
import PopularMovies from '../PopularMovies/PopularMovies';
import Footer from './Footer/Footer'

const Framework = () => {
  const greenLanternLogo = require('../../Assets/greenLanternMWlogo2.jpg');

  return (
    <div className='framework-container'>
     <Header/>
      <nav> </nav>

      <div className='framework'>
        <section className='framework-section-one'>
          {' '}
          New & Trending <br />
          <PopularMovies />
        </section>
       
      </div>
      <Footer/>
    </div>
  );
};
export default Framework;
