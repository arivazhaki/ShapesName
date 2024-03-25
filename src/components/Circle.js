import { React } from 'react';

const Circle = ({ size, color }) => {
	const circleStyle = {
		width: size,
		height: size,
		borderRadius: '50%',
		backgroundColor: color,
	};

	return <div style={ circleStyle }/>;
};

export default Circle;
