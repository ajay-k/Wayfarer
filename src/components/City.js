import React, { Component } from 'react';
import CityModel from '../models/city'
import { withRouter } from 'react-router-dom'
import PostModal from '../components/PostModal'

class City extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        isLoaded: false,
        userId: localStorage.getItem('uid'),
        url: '',
        posts: [],
        modalOpen: false,

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
        this.setState({
            modalOpen: true,
        })
    }

    handleClose = (event) => {
        event.preventDefault()
        this.setState({
            modalOpen: false,
        })
    }

    render() {
        console.log('i am in RENDER')
        return (
            <div className="cityDetail mt-5">
                <div className = "cityText">
                  <h2 class = "city-name mb-2 mr-5">{this.state.name}</h2>
                  <p class = "city-descript mt-2">{this.state.description}</p>
               
            </div>

            <div className = "cityImage ml-5">
                  <img class = "city-pic"src ={this.state.image}></img>
            </div>
             

                <div className="cityPostsContainer mt-5">
                    <h1 class= "mr-5">Post 
                    <button type="button" class="btn btn-primary btn-circle btn-md ml-5" onClick={this.handleClick}>+</button>
                    </h1>
                    <PostModal open={this.state.modalOpen} close={this.handleClose} userId={this.state.userId} cityId={this.props.match.params.id}/>

                    <div className="cityPost">
                      {
                        
                         this.state.isLoaded ?
                        <div>
                         {this.state.posts.map(function(post, index) {
                             return     <div class="card-horizontal">
                                            <img class = "img-square-wrapper" src={post.image} alt="postImage"></img>
                                            <div class="card-header w-20">{post.title}</div>
                                            <div class="card-body">
                                                <p class="card-text">{post.content}</p>
                                            </div>
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
