import React from 'react';
import { Link, Route } from 'react-router-dom';
import Button from '../../Button/Button';
import './NavBar.scss';

const NavBar = () => {
	return (
		<Route>
			<section className='header-parent'>
				<ul className='header-button-list-parent'>
					<Link to='/popular-movies'>
						<Button className='header-button'>Popular Now</Button>
					</Link>
					<Link to='/search-movies'>
						<Button className='header-button'>Search Movies</Button>
					</Link>
					<Link to='/popular-movies'>
						<Button className='header-button'>Box Office</Button>
					</Link>
					<Link to='/popular-movies'>
						<Button className='header-button'>My Comments</Button>
					</Link>
				</ul>
			</section>
		</Route>
	);
};
export default NavBar;
