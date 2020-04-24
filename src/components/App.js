import React, {Component} from 'react';
import Routes from '../config/routes';
import { withRouter } from 'react-router-dom'
import Navbar from './Navbar.js';
import RegisterModal from './RegisterModal.js';
import UserModel from '../models/user';



class App extends Component {
    state = {
		currentUser: localStorage.getItem('uid')
	}

	setCurrentUser = (userId) => {
		this.setState({
			currentUser: userId
		})
		localStorage.setItem('uid', userId)
	}



	// TODO 
	// Log Out!
	logout = (event) => {
		event.preventDefault();

		localStorage.removeItem('uid')
		UserModel.logout()
		  .then(res => {
			  console.log(res)
			  console.log('----------------- Check')
			  console.log(this.state.currentUser)

			  this.setState({currentUser: null})
			  this.props.history.push('/login')
		  })
		  .catch(err => console.log(err))
	}


	render() {
		return (
			<>
				<Navbar currentUser={this.state.currentUser} 
				setCurrentUser={this.setCurrentUser}
				logout={this.logout}
				/>
				{/* TODO LOG OUT */}
				{/* <RegisterModal /> */}
				{/* { Routes } */}
				<div className="container">
				<Routes
				   currentUser={this.state.currentUser} 
				   setCurrentUser={this.setCurrentUser}
			   />
			</div>
			</>
		);
	}
}

export default withRouter(App);
