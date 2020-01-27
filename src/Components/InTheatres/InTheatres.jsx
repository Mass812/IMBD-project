import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../MovieThumb.scss';
import DVDcase from '../DVDcase/DVDcase';

const UpAndComing = () => {
	const [ nowPlaying, setNowPlaying ] = useState([]);

	useEffect(() => {
		const pullNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=2121f2ad7169f32e4b2cab5cf77d32cd&region=US`;

		axios
			.get(pullNowPlaying)
			.then((res) => res.data.results)
			.then((res) => {
				setNowPlaying(res);
			})
			.catch((err) => console.error(err, '☹️'));

		return () => {
			console.log('left area use effect fired');
		};
	}, []);

	console.log('nowPlaying returning as: ', nowPlaying);

	const displayNowPlaying = nowPlaying.map((n, idx) => (
		<DVDcase
			to={`/trending/${n.id}`}
			key={n.id}
			src={`https://image.tmdb.org/t/p/w500${n.poster_path}`}
			alt={n.title}
			name={n.title}
		/>
	));

	return (
		<div className='movieCard-wrapper'>
			<div className='rendered-items'>{displayNowPlaying}</div>
		</div>
	);
};
export default UpAndComing;
