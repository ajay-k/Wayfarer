import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App';
import RegisterModal from '../components/RegisterModal.js';
import Home from '../components/Home'


export default () => (
	<Switch>
		<Route exact path="/" component={Home}/>
		{/* <Route path="/register" component={RegisterModal} /> */}
	</Switch>
)