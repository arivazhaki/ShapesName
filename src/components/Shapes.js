import { React } from 'react';
import RandomNumber from './RandomNumber';

const Shapes = (context) => {
	const { config } = context;
	const { shapes } = config;

	const minValue = 1;
	const maxValue = 4;

	const NumberValue = RandomNumber(minValue, maxValue);

	return shapes.map((shape, i) => {
		const myShape = { ...config[shape] };

		return (
			<div key={ i }>
				<div style={ config[shape] }/>
				<div>{ myShape }</div>
				<div>{ NumberValue } </div>
			</div>
		);
	});
};

export default Shapes;
