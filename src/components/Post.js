import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import PostModel from '../models/post'

class Post extends Component {
    
    state = {
        title: this.props.title,
        content: this.props.content,
        image: this.props.image,
        id: '',
       
  }



  componentDidMount() {
      this.setState({
          id: this.props.postId
      })
      console.log('poooooooooost', this.state.id)
      PostModel.view(this.props.currentUser, this.props.postId)
        .then((res) => {
            console.log('This is our POST FREAKING DATA')
            console.log(res)
            this.setState({
                id: this.props.postId
            })
            console.log('poooooooooost', this.state.id)
        })
        .catch((err) => console.log(err))
  }



    render() {
        
        console.log('------------', this.state.id)
        return (
            <div>
                <NavLink to="/showPost">{this.state.title}</NavLink>
            </div>
        );
    }
}

export default Post;
