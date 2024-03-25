import { React } from 'react';
import './App.scss';
import Basic from './components/Basic';
import Basicinbuild from './components/Basicbuild';
import Basicnew from './components/Basicnew';
import Circle from './components/Circle';

const App = () =>
	<div className="App">
		Ready to start.
		<Basic/>
		<Basicinbuild/>
		<Basicnew/>
		<h1>Circle Example</h1>
		<Circle size="400px" color="#f00"/>
	</div>;

export default App;
