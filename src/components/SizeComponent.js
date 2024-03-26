/* eslint-disable react/no-unknown-property */
/* eslint-disable no-console */
import { React } from 'react';
import Circle from './Circle';
import Square from './Square';

const SizeComponent = (context) => {
	const { config } = context;
	const { sizes } = config;

	return sizes.map((size, i) => {
		const myShapesize = config[size] ;

		console.log(myShapesize);
		return (
			<div key={ i }>
				<Circle{ ...{ ...context, myShapesize } }/>
				<Square{ ...{ ...context, myShapesize } }/>
				<button> Click Me! </button>
				<button variant="text">Text</button>
				<button variant="contained">Contained</button>
				<button variant="outlined">Outlined</button>
			</div>
		);
	});
};

export default SizeComponent;
