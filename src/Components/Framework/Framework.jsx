import React, { useState } from 'react';
import './Framework.scss';
import Header from '../Framework/Header/Header';
import UpAndComing from '../UpAndComingMovies/UpAndComing';
import MovieBySearch from '../MovieBySearch/MovieBySearch';
import Footer from './Footer/Footer';
import HotTv from '../HotTv/HotTv';
import InTheatres from '../InTheatres/InTheatres';
import TvAiringToday from '../TvAiringToday/TvAiringToday';

const Framework = () => {
	const [ menuClicked, setMenuClicked ] = useState(true);

	const menuClickedByUser = () => {
		setMenuClicked((prev) => {
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
					<InTheatres />
				</section>{' '}
				<div className='section-one-sub-title'>
					<h1>Coming Soon</h1>
					<h2>Preview what your missing out on</h2>
				</div>
				<section className='framework-section-one'>
					<UpAndComing />
				</section>{' '}
				<div className='section-one-sub-title'>
					<h1>What's Hot on TV</h1>
					<h2>Discover Something New</h2>
				</div>
				<section className='framework-section-one'>
					<HotTv />
				</section>
				<div className='section-one-sub-title'>
					<h1>Search for a Movie or Show</h1>
					<h2>to find what interests you</h2>
				</div>
				<MovieBySearch />
			</div>
			<Footer />
		</div>
	);
};
export default Framework;
