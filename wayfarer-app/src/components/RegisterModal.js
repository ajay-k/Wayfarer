import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class RegisterModal extends Component {
	state = {
		open: false
	}

  render() {
  	
    return (
    	<Modal show={false}>
	      <Modal.Header>Hi</Modal.Header>
	      <Modal.Body>asdfasdf</Modal.Body>
	      <Modal.Footer>This is the footer</Modal.Footer>
    	</Modal>
  );
  }
}

export default RegisterModal;
