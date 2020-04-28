import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import PostModel from '../models/post'
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'



class Post extends Component {
    
    state = {
        title: '',
        content: '',
        image: '',
        id: '',
       
  }



  componentDidMount() {
      this.setState({
          id: this.props.postId
      })
      console.log('poooooooooost', this.state.id)
      PostModel.view(this.props.currentUser, this.props.match.params.id)
        .then((res) => {
            console.log('This is our POST FREAKING DATA')
            console.log(res)
            this.setState({
                title: res.data.title,
                image: res.data.image,
                content: res.data.content,
                id: this.props.postId
            })
            console.log('poooooooooost', this.state.id)
        })
        .catch((err) => console.log(err))
  }



    render() {
        // const isParamId = this.props.match.params.id;
        console.log('------------', this.state.id)
        return (
            <>
              <div className="post-image-container">
                <img className="profile-post-image " src={this.state.image} alt="postImage"></img>
            </div>
            <div className="postCardProfile mt-5">
               
                <div className="card">
                    <div className="card-header w-20">{this.state.title}</div>
                    <div className="card-body">
                        <p className="card-text">{this.state.content}</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default withRouter(Post);
