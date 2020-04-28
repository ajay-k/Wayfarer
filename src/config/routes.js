import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/App';
import RegisterModal from '../components/RegisterModal.js';
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Post from '../components/Post'
import Cities from '../components/Cities'
import City from '../components/City'

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
		<Route path="/profile" render={ (routeProps) => {
		  return <Profile 
					{ ...routeProps}
					currentUser={props.currentUser}
					setCurrentUser={props.setCurrentUser}
					/> 
		}}/>

		<Route path="/showPost/:id" render={(routeProps) => {
			return <Post {...props}
				   { ...routeProps}
				   currentUser={props.currentUser}
					   />
		}} />

		<Route path="/cities" component={Cities}/>
		
		{/* <Route path="/cities" render={(routeProps) => {
			return <Cities {...props}
				{...routeProps}
				currentUser={props.currentUser}
			/>
		}} /> */}
		<Route path="/cities/:id" component={City}/>
         
		{/* <Route path="/cities/:id" render={(routeProps) => {
			return <City {...props}
				{...routeProps}
				currentUser={props.currentUser}
			/>
		}} /> */}

			

	</Switch>
)