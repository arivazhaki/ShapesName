import React from 'react';

const Oval = ({ width, height, color }) => {
	const ovalStyle = {
		width: width,
		height: height,
		backgroundColor: color,
		borderRadius: '50%',
	};

	return <div style={ ovalStyle }/>;
};

export default Oval;
