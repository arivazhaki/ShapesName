/* eslint-disable max-lines-per-function */
import { React } from 'react';
import './App.scss';
import ShapesNew from './components/ShapesNew';
import Oval from './components/Oval';

const App = (context) =>
	<div className="App"><center>
		Ready to start.
		<ShapesNew{ ...context }/>
		<Oval width="400px" height="200px" color="green"/>
	</center>
	</div>;

export default App;
