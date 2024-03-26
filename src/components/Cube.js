import React from 'react';
import './Cube.css';

const Cube = ({ size, color }) => {
	const cubeStyle = {
		width: size,
		height: size,
	};

	const faceStyle = {
		backgroundColor: color,
		width: size,
		height: size,
	};

	return (
		<div className="cube" style={ cubeStyle }>
			<div className="face front" style={ faceStyle }/>
		</div>
	);
};

export default Cube;
