import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../MovieThumb.scss';

const TvAiringToday = () => {
	const [ discoverTV, setDiscoverTV ] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
			)
			.then((res) => res.data.results)
			.then((res) => setDiscoverTV(res))
			.catch((err) => console.error(err, '☹️'));

		return () => {
			console.log('Airing TODAY State HAS : ', discoverTV);
		};
	}, []);

	console.log('Top Rated TV returning as: ', discoverTV);

	const showTopRated = discoverTV.map((n, idx) => (
		<Link key={idx} to={`/trending/${n.id}`}>
			<div key={n.id} className='trending-card-body'>
				<div className='trending-photo-body'>
					<img
						className='trending-photo'
						src={`https://image.tmdb.org/t/p/w500${n.poster_path}`}
						alt={'scene'}
					/>
					<div className='trending'>{!n.title ? 'No Title' : n.title}</div>
				</div>
			</div>
		</Link>
	));

	return (
		<div className='movieCard-wrapper'>
			<div className='rendered-items'>{showTopRated}</div>
		</div>
	);
};
export default TvAiringToday;
