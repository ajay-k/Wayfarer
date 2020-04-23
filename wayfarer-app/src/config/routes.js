import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App';
import RegisterModal from '../components/RegisterModal.js';


export default () => (
	<Switch>
		<Route exact path="/" component={App}/>
		<Route path="/register" component={RegisterModal} />
	</Switch>
)