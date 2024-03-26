import { React } from 'react';
import './App.scss';
import Basic from './components/Basic';
import Basicinbuild from './components/Basicbuild';
import Basicnew from './components/Basicnew';
import Circle from './components/Circle';
import Square from './components/Square';
import Rectangle from './components/Rectangle';
import Oval from './components/Oval';
import Triangle from './components/Triangle';
import Components from './components/Components';
import Conditionalstyling from './components/ConditionalStyling';

const App = () =>
	<div className="App">
		Ready to start.
		<Basic/>
		<Basicinbuild/>
		<Basicnew/><center>
			<h1>Circle Example</h1>
			<center><Circle size="400px" color="#f00"/></center>
			<h1>Square Example</h1>
			<center><Square size="300px" color="green"/></center>
			<h1>Rectangle Example</h1>
			<Rectangle width="400px" height="200px" color="#0f0"/>
			<h1>Oval Example</h1>
			<Oval width="400px" height="200px" color="blue"/>
			<h1>Triangle Example</h1>
			<Triangle size="400px" color="indigo"/>
			<Components/>
			<Conditionalstyling/>
		</center>
	</div>;

export default App;
