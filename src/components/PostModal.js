import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import CityModal from '../models/city'

class PostModal extends Component {
   
    state = {
        title: '',
        content: '',
        image: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        CityModal.cityPost(this.props.userId, this.props.cityId, this.state)
        .then(res => {
            this.setState({
                title: '',
                content: '',
                image: '',
            })
        })
        .catch((err) => console.log(err))

    }
  

    render() {
        return (
           <Modal show={this.props.open}>
               <Modal.Header>
                    <Button variant="danger" onClick={this.props.close}> X </Button>
               </Modal.Header>
                <Modal.Body>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-12 offset-md-0">
                                <h4 className="text-center mb-3">Create a New Post</h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Title</label>
                                        <input className="form-control form-control-lg" onChange={this.handleChange} type="text" id="title" name="title" value={this.state.title} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Content</label>
                                        <input className="form-control form-control-lg" onChange={this.handleChange} type="text" id="content" name="content" value={this.state.content}  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Image</label>
                                        <input className="form-control form-control-lg" onChange={this.handleChange} type="text" id="image" name="image" value={this.state.image} />
                                    </div>
                                    <button className="btn btn-primary float-right" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

           </Modal>
        );
    }
}

export default PostModal;
