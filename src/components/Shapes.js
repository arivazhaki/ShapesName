import { React } from 'react';

const Shapes = (context) => {
	const { config } = context;
	const { shapes } = config;

	return shapes.map((shape, i) => {
		const myShape = { ...config[shape] };

		return (
			<div key={ i }>
				<div style={ config[shape] }/>
				<div>{ myShape }</div>
			</div>
		);
	});
};

export default Shapes;
