import { React } from 'react';
import './App.scss';
import Basic from './components/Basic';
import Basicinbuild from './components/Basicbuild';
import Basicnew from './components/Basicnew';
import Circle from './components/Circle';
import Square from './components/Square';

const App = () =>
	<div className="App">
		Ready to start.
		<Basic/>
		<Basicinbuild/>
		<Basicnew/>
		<h1>Circle Example</h1>
		<Circle size="400px" color="#f00"/>
		<h1>Square Example</h1>
		<center><Square size="300px" color="green"/></center>
	</div>;

export default App;
