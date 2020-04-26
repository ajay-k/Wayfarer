import React, { Component } from 'react';
import '../App.css'
import ProfileModel from '../models/profile'
import Button from 'react-bootstrap/Button';




class Profile extends Component {
    
   state = {
       username: '',
       name: '',
       city: '',
       joinDate: ''
   }
    
  handleInfo = (event) => {
      event.preventDefault()
      // alert(this.props.currentUser)
      ProfileModel.view(this.props.currentUser)
          .then((res) => {
              console.log("Got the id")
              console.log(res.data)

              this.setState({
                username: res.data.username,
                joinDate: res.data.createdAt,
               })
              // console.log(res)
              // console.log(res.data.data)
              // this.props.setCurrentUser(res.data.data)
              // this.props.history.push('/profile')
          })
          .catch((err) => console.log(err))
  }
   

    render() {
        return (
            
            <div className='profileContainer col-md-12'>
                <div className="row">
                    <div className='userContainer col-md-4'>
                    <button type="button" class="btn btn-info btn-sm" onClick={this.handleInfo}>Get Info</button>
                    <form onSubmit={this.handleSubmit}>
                       <div> 
                          <label>Username: </label> <label>{this.state.username}</label><br></br>
                          <label>Name: Aibek</label><button type="button" class="btn btn-info btn-sm" type="submit" >Edit</button>
                          <br></br>
                          <label>Current City: San-Francisco</label>
                          <button type="button" class="btn btn-info btn-sm" type="submit">Edit</button>
                          <br></br>
                          <label>Join Date: </label><label>{this.state.joinDate}</label>
                        </div>
                    </form>
                    </div>
                    <div className='postContainer col-md-8'>
                        <div>
                            <p>Post Info</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
