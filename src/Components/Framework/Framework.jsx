import React, { useState } from 'react';
import './Framework.scss';
import Button from '../Button/Button';
import Header from '../Framework/Header/Header';
import NavBar from './NavBar/Navbar';
import NowPlaying from '../NowPlaying/NowPlaying';
import MovieBySearch from '../MovieBySearch/MovieBySearch';
import MovieSearchBar from '../MovieSearchBar/MovieSearch';
import PopularMovies from '../PopularMovies/PopularMovies';
import Footer from './Footer/Footer';
import NewlyReleased from '../HotTv/HotTv';
import HotTv from '../HotTv/HotTv';

const Framework = () => {
  const [menuClicked, setMenuClicked] = useState(true);

  const menuClickedByUser = () => {
    setMenuClicked(prev => {
      const value = setMenuClicked(!prev);
      console.log(value);
      return value;
    });
  };

  return (
    <div className='framework-container'>
      <Header />

      {/* <div className ={menuClicked ? 'small-arrow-tab': 'small-arrow-tab-pushed'} onClick={menuClickedByUser}>&#141; </div> */}
      <div className='framework'>
        {' '}
        <div className='section-one-sub-title'>
          <h1>In Theatres</h1>
          <h2>Preview what your missing out on</h2>
        </div>
        <section className='framework-section-one'>
          <NowPlaying />
        </section>{' '}
        <div className='section-one-sub-title'>
          <h1>What's Hot on TV</h1>
          <h2>Discover Something New</h2>
        </div>
        <section className='framework-section-one'>
          <HotTv />
        </section>{' '}
        <div className='section-two-sub-title'>
          <h1>Popular Searches</h1>
          <h2>Here's what others are interested in</h2>
        </div>
        <section className='framework-section-two'>
          <PopularMovies />
        </section>
        <div className='section-one-sub-title'>
          <h1>Most Watched TV</h1>
          <h2>Discover what's Binge Worthy</h2>
        </div>
        <section className='framework-section-one'>
          <NowPlaying />
        </section>{' '}
        <MovieBySearch />
      </div>
      <Footer />
    </div>
  );
};
export default Framework;
