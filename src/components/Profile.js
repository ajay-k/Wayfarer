import React, { Component } from 'react';
import '../App.css'
import ProfileModel from '../models/profile'
import Button from 'react-bootstrap/Button';


class Profile extends Component {
    
   state = {
       name: '',
       city: '',
   }
    
   

    render() {
        return (
            
            <div className='profileContainer col-md-12'>
                <div className="row">
                    <div className='userContainer col-md-4'>
                       <div> 
                   <p>User Info</p> 
                         <label>Name: Aibek</label>
                            <button type="button" class="btn btn-info btn-sm" >Edit</button>

                            <br></br>

                         <label>Current city: San-Francisco</label>
                            <button type="button" class="btn btn-info btn-sm" >Edit</button>
                   <p>Join Date</p>
                            
                       </div>
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
