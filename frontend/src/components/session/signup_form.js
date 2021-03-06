// src/components/session/signup_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
//    if (nextProps.signedIn === true) {
//      this.props.history.push('/');
//    }
//
    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history).then(()=>this.props.login({email:this.state.email, password: this.state.password}));//  this.props.login(user);
  }

  renderErrors() {
    return(
      <div className="SessionErrors">
        {Object.keys(this.state.errors).map((error, i) => (
          <p key={`error-${i}`}>
            {this.state.errors[error]}
          </p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="ModalForm">
        <form onSubmit={this.handleSubmit}>
          <h2 className="modal-h2">Enter your Credentials</h2>
          <div className="login-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <input type="submit" value="Sign Up" />
            { Object.keys(this.state.errors).length>0?this.renderErrors(): ""}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);