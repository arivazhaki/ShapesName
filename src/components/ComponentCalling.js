/* eslint-disable unused-imports/no-unused-vars */
import { React } from 'react';
import Circle from './Circle.js';
import Square from './Square.js';

const Componentcalling = (context) => {
	const inputVal = true;

	return <div> { inputVal === true
		? <Circle { ...context }/>
		: <Square { ...context }/> }
	</div>;
};

export default Componentcalling;
