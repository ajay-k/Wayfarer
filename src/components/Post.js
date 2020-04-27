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
            <div>
                <h3>PostId: {this.props.match.params.id}</h3>
                <h3>Title: {this.state.title}</h3>
                <h3>Content: {this.state.content}</h3>
                <h3>Image: {this.state.image}</h3>
            </div>
        );
    }
}

export default withRouter(Post);
