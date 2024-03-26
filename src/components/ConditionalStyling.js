/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';

const Conditionalstyling = () => {
	const inputVal = false;

	const color = inputVal === true ? 'blue' : 'red';

	return <div
		style={ {
			'background-color': color,
			'width': '100vw',
			'height': '100vh',
		} }
	       />;
};

export default Conditionalstyling;
