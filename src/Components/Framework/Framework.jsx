import React from 'react';
import './Framework.scss';
import Header from '../Framework/Header/Header';
import NavBar from './NavBar/Navbar'
import NowPlaying from '../NowPlaying/NowPlaying';
import MovieBySearch from '../MovieBySearch/MovieBySearch';
import PopularMovies from '../PopularMovies/PopularMovies';
import Footer from './Footer/Footer'

const Framework = () => {

  return (
    <div className='framework-container'>
     <Header/>
      <NavBar/>
    <NowPlaying/>
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
