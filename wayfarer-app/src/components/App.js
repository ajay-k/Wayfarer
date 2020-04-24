import React, {Component} from 'react';
import Routes from '../config/routes';
import Navbar from './Navbar.js';
import RegisterModal from './RegisterModal.js';



class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				{/* <RegisterModal /> */}
				{/* { Routes } */}
				<Routes />
			</div>
		);
	}
}

export default App;
