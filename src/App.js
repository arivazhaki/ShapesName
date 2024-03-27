/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import ShapesNew from './components/ShapesNew';

const App = (context) =>
	<div className="App"><center>
		Ready to start.
		<ShapesNew{ ...context }/>
	</center>
	</div>;

export default App;
