import { React } from 'react';
import './App.scss';
import Basic from './components/Basic';
import Basicinbuild from './components/Basicbuild';
import Basicnew from './components/Basicnew';

const App = () =>
	<div className="App">
		Ready to start.
		<Basic/>
		<Basicinbuild/>
		<Basicnew/>
	</div>;

export default App;
