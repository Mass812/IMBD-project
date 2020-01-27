import React from 'react';
import '../Framework/NavBar/NavBar.scss';

const Button = (props) => {
	return (
		<div>
			<button onClick={props.onClick} className={props.className}>
				{props.children}
			</button>
		</div>
	);
};
export default Button;
