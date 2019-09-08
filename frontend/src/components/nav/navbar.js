import React from 'react';

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

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      let user = {
        email: 'me@me.me',
        password: 'password'
      };
      if (this.props.loggedIn) {
        return (
            <div>
              <button className="logout" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className ="NavBar--SignedOut">
              <div className="NavBar--Signup" onClick={()=>this.props.login(user)}>
                Demo
              </div>
              &nbsp;
              &nbsp;
              &nbsp;

              <div className="NavBar--Signup" onClick={()=>this.props.modalOn('signUp')}>
                Signup
              </div>
                &nbsp;&nbsp;&nbsp;
              <div className="NavBar--Login" onClick ={()=>this.props.modalOn('login')}>
                Login
              </div>

            </div>
        );
      }
  }

  render() {
  //loggedIn: state.session.isAuthenticated
      return (
        <div className="NavBar">
          <h1 className="NavBar--Header">Spacey
            <span className="emoji" role="img" aria-label="rocket">🚀</span>
          </h1>
          <h3 className="info">?</h3>
          <div className="spacer"></div>
          {this.props.loggedIn}
          {this.getLinks()}
        </div>
      );
  }
}

export default NavBar;