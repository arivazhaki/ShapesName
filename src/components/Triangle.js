import React from 'react';

const Triangle = ({ size, color }) => {
	const triangleStyle = {
		width: 0,
		height: 0,
		borderTop: `${ size } solid transparent`,
		borderBottom: `${ size } solid transparent`,
		borderRight: `${ size } solid ${ color }`,
	};

	return <div style={ triangleStyle }/>;
};

export default Triangle;
