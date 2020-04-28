import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import UserModel from '../models/user'

class RegisterModal extends Component {
	state = {
		username: '',
		password: '',
		password2: ''
	}

   handleChange = (event) => {
	   this.setState({
		   [event.target.name]: event.target.value
	   })
   }


   handleSubmit = (event) => {
	   event.preventDefault()
	   UserModel.create(this.state)
	   .then(res => {
		   this.setState({
			   username: '',
			   password: '',
			   password2: ''
		   })
		   alert('Succesfully registered')
		   this.props.history.push('/login')
		   
		
	   })
	   .catch(err => console.log(err))

   }

  render() {
  	
    return (
    	<Modal  show={this.props.appear}>
	      <Modal.Header>
	      	 <Button className = "float-right" variant="danger" onClick={this.props.close}> X </Button>
	      </Modal.Header>
	      <Modal.Body >
				<div className="container mt-4">
					<div className="row">
						<div className="col-md-12 offset-md-0">
							<h4 className="text-center mb-3">Register</h4>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="name">Username</label>
									<input
										onChange={this.handleChange}
										className="form-control form-control-lg"
										type="text"
										id="username"
										name="username"
										value={this.state.username}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="name">Password</label>
									<input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
								</div>
								<div className="form-group">
									<label htmlFor="password2">Confirm Password</label>
									<input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
								</div>
								<button className="btn btn-primary float-right" type="submit">Register</button>
							</form>
						</div>
					</div>
				</div>
		  </Modal.Body>
			
    	</Modal>
  );
  }
}

export default RegisterModal;
