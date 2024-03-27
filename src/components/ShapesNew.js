import { peek } from '@laufire/utils/debug';
import { React } from 'react';

const ShapesNew = (context) => {
	const { config } = context;
	const { shapes } = config;

	peek(config);

	return shapes.map((shape, i) => <div key={ i }>
		<div style={ config[shape] }/>
		<div>{ shape }</div>
	</div>);
};

export default ShapesNew;
