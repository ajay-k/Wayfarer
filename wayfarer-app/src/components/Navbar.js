import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import RegisterModal from './RegisterModal.js'
import Login from './Login'




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
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand"  to="/">Wayfarer</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  ​
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              { this.props.currentUser ? 
               <>

                 <li className="nav-item">
                   <NavLink className="nav-link" to="/profile">Profile</NavLink>        
                </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="/logout" onClick={this.props.logout}>Logout</NavLink>
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
                  <Login appear={this.state.Modelopen2} close={this.onCloseModal2}/>
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
