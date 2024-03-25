import React from 'react';

const Rectangle = ({ width, height, color }) => {
	const rectangleStyle = {
		width: width,
		height: height,
		backgroundColor: color,
	};

	return <div style={ rectangleStyle }/>;
};

export default Rectangle;
