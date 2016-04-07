import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Button, Well, Input}
 from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';
import SignupChild from './SignupChild.jsx';

class Signup extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.state.userInfo = {};
    this.state.error = '';
    this.handleInputFirstName = this.handleInputFirstName.bind(this);
    this.handleInputLastName = this.handleInputLastName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputUserName = this.handleInputUserName.bind(this);
    this.handleInputPassword =  this.handleInputPassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this._errorMessage = this._errorMessage.bind(this);
  }

  _errorMessage(err) {
    this.setState({ error: err });
  }

  handleInputFirstName(user) {
    this.setState({ userInfo: user });
    this.setState({ error:'' });
  }

  handleInputLastName(user) {
    this.setState({ userInfo: user });
    this.setState({ error:'' });
  }

  handleInputEmail(user) {
    this.setState({ userInfo: user });
    this.setState({ error:'' });
  }

  handleInputUserName(user) {
    this.setState({ userInfo: user });
    this.setState({ error:'' });
  }

  handleInputPassword(user) {
    this.setState({ error: '' });
    this.setState({ userInfo: user });

  }

  formSubmit(user) {
    var newUser = user;
    auth.signup(newUser , () => {
      this.setState({ error: 'Email Already Exists' });
    });
  }

  render() {
    return (
      <SignupChild handleInputFirstName = {this.handleInputFirstName}
        handleInputLastName = {this.handleInputLastName}
        handleInputEmail = {this.handleInputEmail}
        handleInputUserName = {this.handleInputUserName}
        handleInputPassword = {this.handleInputPassword}
        _errorMessage = {this._errorMessage}
        formSubmit = {this.formSubmit}
        userInfo = {this.state.userInfo}
        error = {this.state.error}
        />
);
  }
}

export default Signup;
