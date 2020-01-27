import React from 'react';
import { Link } from 'react-router-dom';

const DVDcase = (props) => {
	return (
		<Link key={props.key} to={props.to}>
			<div key={props.key} className='trending-card-body'>
				<div className='trending-photo-body'>
					<img className='trending-photo' src={props.src} alt={props.alt} />
					<div className='trending'>
						{!props.name ? 'No Title' : props.name}
					</div>
				</div>
			</div>
		</Link>
	);
};
export default DVDcase;
