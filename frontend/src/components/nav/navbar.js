// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom'
//import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }
//                <Link to={'/tweets'}>All Tweets</Link>
//                <Link to={'/profile'}>Profile</Link>
//                <Link to={'/new_tweet'}>Write a Tweet</Link>

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    //debugger
    console.log(this.props)
      if (this.props.loggedIn) {
        return (
            <div>
              <span>Hi </span>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className ="NavBar--SignedOut">
              <div className="NavBar--Signup">
                <Link to={'/signup'} >Signup</Link>
              </div>
                &nbsp;&nbsp;&nbsp;
              <div className="NavBar--Login">
                <Link to={'/login'} >Login</Link>
              </div>

            </div>
        );
      }
  }

  render() {
  //loggedIn: state.session.isAuthenticated
      return (
        <div className="NavBar">
            <h1>Spacey</h1>
            {this.props.loggedIn}
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;