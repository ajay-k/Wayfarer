import React, { Component } from 'react';
import '../App.css'


class Profile extends Component {
    render() {
        return (
            
            <div className='profileContainer col-md-12'>
                <div className="row">
                    <div className='userContainer col-md-4'>
                       <div> 
                         <p>User Info</p> 
                         <p>name</p>
                         <p>Current city</p>
                         <p>Join date</p>
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
