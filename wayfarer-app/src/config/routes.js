import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App';
import RegisterModal from '../components/RegisterModal.js';
import Home from '../components/Home'
import Login from '../components/Login'


export default (props) => (
	<Switch>
		<Route exact path="/" component={Home}/>
		{/* <Route path="/register" component={RegisterModal} /> */}
		<Route path="/login" render={ (routeProps) => {
		  return <Login 
					{ ...routeProps}
					currentUser={props.currentUser}
					setCurrentUser={props.setCurrentUser}
					/> 
		}}/>
	</Switch>
)