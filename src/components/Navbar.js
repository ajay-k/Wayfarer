import React, { Component } from 'react';
import RegisterModal from './RegisterModal.js'
import Login from './Login'
import {Link , NavLink, Route} from 'react-router-dom'
import Cities from './Cities'






class Navbar extends Component {
  
 state = {
    Modelopen1: false,
    Modelopen2: false,
  };

  onOpenModal1 = () => {
    this.setState({ Modelopen1: true });
  };

  onCloseModal1 = () => {
    this.setState({ Modelopen1: false });
  };


  onOpenModal2 = () => {
    this.setState({ Modelopen2: true });
  };

  onCloseModal2 = () => {
    this.setState({ Modelopen2: false });
  };


  render() {
    const { open } = this.state;



    return (
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <Link className="navbar-brand" exact to="/">Wayfarer</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  ​
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">
              { this.props.currentUser ? 
               <>
                  <li className="nav-item">
                    {/* <Route path="/cities" component={Cities} currentUser={this.props.currentUser} >
                    </Route> */}
                    <NavLink className="nav-link" to="/cities/5ea7cccfbac86777706edef7" >Cities</NavLink>
                  </li>
                 <li className="nav-item">
                   <NavLink className="nav-link" to="/profile">Profile</NavLink>        
                </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout" onClick={this.props.logout}>Logout</NavLink>
                  </li>
                  
               </>
              :
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register" onClick={this.onOpenModal1}>Register</NavLink>
                  <RegisterModal appear={this.state.Modelopen1} close={this.onCloseModal1}/>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" onClick={this.onOpenModal2}>Login</NavLink>
                  <Login appear={this.state.Modelopen2} close={this.onCloseModal2} setCurrentUser={this.props.setCurrentUser}/>
                </li>
                  
              </>
            }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
