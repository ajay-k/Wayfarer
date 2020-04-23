import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
    
    state = {
        email: '',
        password: ''
    }


    render() {
        return (
            <Modal show={this.props.appear}>
                <Modal.Header>Login</Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <h4 className="mb-3">Login</h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Email</label>
                                        <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
                                    </div>
                                    <button className="btn btn-primary float-right" type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={this.props.close}>Close</Button>
                </Modal.Footer>

            </Modal>
            
        );
    }
}

export default Login;
