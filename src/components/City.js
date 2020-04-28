import React, { Component } from 'react';
import CityModel from '../models/city'
import { withRouter } from 'react-router-dom'

class City extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        isLoaded: false,
        userId: localStorage.getItem('uid'),
        url: '',
        posts: [],

    }

    componentDidMount() {
        console.log('I am in componentDIDMOUNT')
        CityModel.cityShow(this.props.match.params.id)
        .then((res) => {
            console.log('Found the City')
            console.log(this.props.currentUser)
            console.log(res)
            this.setState({
                name: res.data.name,
                description: res.data.description,
                image: res.data.image,
                isLoaded: true,
                url: this.props.match.params.id,
                posts: res.data.posts

            })
        })
        .catch((err) => console.log(err))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('I am in componentDIDUPDATE')
        console.log(this.props.currentUser)
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.id !== this.state.url) {
            CityModel.cityShow(this.props.match.params.id)
                .then((res) => {
                    console.log('Found the City')
                    console.log(res)
                    this.setState({
                        name: res.data.name,
                        description: res.data.description,
                        image: res.data.image,
                        isLoaded: true,
                        url: this.props.match.params.id,
                        posts: res.data.posts

                    })
                })
                .catch((err) => console.log(err))
        }
        
    }

    handleClick = (event) => {
        event.preventDefault()
        alert("Added Post")
    }

    render() {
        console.log('i am in RENDER')
        return (
            <div className="cityDetail">
                
                  <h3>{this.state.name}</h3>
                  <h3>{this.state.description}</h3>
                  <h3>{this.state.image}</h3>
                
                <div className="cityPostsContainer">
                    <h1>Post <button type="button" class="btn btn-info" onClick={this.handleClick}>Add Post</button></h1>
                    <h2>ID: {this.state.userId}</h2>

                    <div className="cityPost">
                      {
                        
                         this.state.isLoaded ?
                        <div>
                         {this.state.posts.map(function(post, index) {
                             return   <div>
                                            <h1>{post.title}</h1>
                                            <h2>{post.content}</h2>
                                            <h2>{post.image}</h2>
                                     </div>
                         }, this)}
                         </div>
                        
                         :
                         <div>No Posts</div>
        
    
                     }
                    </div>
    
                </div> 

            </div>
        );
    }
}

export default withRouter(City);
