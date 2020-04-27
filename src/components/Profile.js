import React, { Component } from 'react';
import '../App.css'
import ProfileModel from '../models/profile'
import { Link, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Post from '../components/Post'




class Profile extends Component {
    
   state = {
       username: '',
       name: '',
       city: '',
       createdAt: '',
       posts: [],
       isLoaded: false,
       postId: '',
   }

   componentDidMount() {
    ProfileModel.view(this.props.currentUser)
          .then((res) => {
              console.log("Got the id")
              console.log(res.data.posts[0]._id)

              this.setState({
                username: res.data.username,
                name: res.data.name,
                createdAt: res.data.createdAt,
                city: res.data.city,
                posts: res.data.posts,
                postId: res.data.posts[0]._id,
                isLoaded: true,
               })
               console.log(this.state.posts)
               
              // console.log(res)
              // console.log(res.data.data)
              // this.props.setCurrentUser(res.data.data)
              // this.props.history.push('/profile')
          })
          .catch((err) => console.log(err))
   }

  handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
  handleSubmit = (event) => {
      event.preventDefault()
      // alert(this.props.currentUser)
      ProfileModel.update(this.props.currentUser, this.state)
          .then((res) => {
              console.log("Updated: Got the id")
              console.log(res.data)

              // this.setState({
              //   username: res.data.username,
              //   joinDate: res.data.createdAt,
              //   name: res.data.name,
              //  })
              // console.log(res)
              // console.log(res.data.data)
              // this.props.setCurrentUser(res.data.data)
              // this.props.history.push('/profile')
          })
          .catch((err) => console.log(err))
  }
   

    render() {
        let postArray = this.state.posts
        const isName = this.state.name;
        const isCity = this.state.city;
        console.log(this.state.posts)
        const {isLoaded} = this.state.isLoaded
        const statePostId = this.state.postId

        return (
        
            <div className='profileContainer col-md-12'>
                
                <div className="row">
                    <div className='userContainer col-md-4'>
                    <button type="button" class="btn btn-info btn-sm" onClick={this.handleInfo}>Get Info</button>
                    <form onSubmit={this.handleSubmit}>
                       <div> 
                          <label>Username: {this.state.username}</label><br></br>
                          <label>Name: {this.state.name}</label>
                          <div><label>Update Name: </label><input type="text" class="form-control" id="name" name="name" onChange={this.handleChange}  aria-describedby="emailHelp" placeholder="Enter Name"/></div>
                          
                          <button type="button" class="btn btn-info btn-sm" type="submit" >Update Name</button>
                          <br></br>
                          <label>Current City: {this.state.city}</label>
                           <div><label>Update City: </label><input type="text" class="form-control" id="city" name="city" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter City"/></div>
                    
                          <button type="button" class="btn btn-info btn-sm" type="submit" >Update City</button>
                          <br></br>
                          <label>Join Date: {this.state.createdAt}</label>
                        </div>
                    </form>
                    </div>
                    <div className='postContainer col-md-8'>
                        <div>
                           {
                               this.state.isLoaded ? 
                               <div>
                                  {/* {this.state.posts.map(function(name, index) {
                                      return   <ul>
                                               <li><NavLink to="/showPost" postId={statePostId}> {name.title} </NavLink></li>
                                              </ul>
                                  })} */}
                                  <ul>
                                     {/* <li>{this.state.posts[0].title}</li> */}

                                     <Post title={this.state.posts[0].title} postId={this.state.postId}/>
                                 </ul>
                                        
                               </div>
                               :
                               <div>DEF</div>
                           }
        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
