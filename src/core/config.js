
/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
const config = {
	shapes: [
		'circle',
		'square',
		'rectangle',
		'triangle',
		'oval',
	],
	circle: {
		width: '300px',
		height: '300px',
		borderRadius: '50%',
		backgroundColor: 'red',
	},
	square: {
		width: '300px',
		height: '300px',
		backgroundColor: 'yellow',
	},
	rectangle: {
		width: '400px',
		height: '300px',
		backgroundColor: '#00f',
	},
	oval: {
		width: '400px',
		height: '200px',
		backgroundColor: '#f00',
		borderRadius: '50%',
	},
	triangle: {
		width: 0,
		height: 0,
		borderTop: '600px',
		borderBottom: '400px solid transparent',
		borderRight: '400px solid indigo',

	},
	size:
		[
			'small',
			'medium',
			'large',
		],
	small: { transform: scale(0.7) },
	medium: { transform: scale(1) },
	large: { transform: scale(1.4) },
};

export default config;
