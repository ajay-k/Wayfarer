import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import UserModel from '../models/user'

class Login extends Component {
    
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.login(this.state)
          .then((res) => {
              console.log(res)
              console.log(res.data.data)
              this.props.setCurrentUser(res.data.data)
              // this.props.history.push('/profile')
          })
          .catch((err) => console.log(err))

    }



    render() {
        return (
            <Modal show={this.props.appear}>
                <Modal.Header>
                  <Button variant="danger" onClick={this.props.close}> X </Button>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-12 offset-md-0">
                                <h4 className="text-center mb-3">Login</h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Username</label>
                                        <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="username" name="username" value={this.state.username} />
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

            </Modal>
            
        );
    }
}

export default Login;
