
import React, { Component } from 'react';

class Post extends Component {
    
    

    state = {
        title: this.props.title,
        content: this.props.content,
        image: this.props.image,
  }

    render() {
        return (
            <div>
               title: {this.state.title}
               content: {this.state.content}
               image: {this.state.image}
               {this.props.postId}
            </div>
        );
    }
}

export default Post;
