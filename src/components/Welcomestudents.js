import { React } from 'react';

const students = [
	'Arivu',
	'saravanan',
];
const WelcomeStudents = () => <div>
	{ students.map((student, i) =>
		<div key={ i }>
			<div>{ student }</div>
		</div>) }
</div>;

export default WelcomeStudents;
