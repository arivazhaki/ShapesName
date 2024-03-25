import { React } from 'react';

const Square = ({ size, color }) => {
	const squareStyle = {
		width: size,
		height: size,
		backgroundColor: color,
	};

	return <div className="square" style={ squareStyle }/>;
};

export default Square;
