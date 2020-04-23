import React from 'react';
import Routes from '../config/routes';
import Navbar from './Navbar.js';
import RegisterModal from './RegisterModal.js';

function App() {
	return(
		<div>
		<Navbar />
		{/* <RegisterModal /> */}
		{/* { Routes } */}
		<Routes/>
		</div>
	);
}

export default App;