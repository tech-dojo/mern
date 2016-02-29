import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Button, Well, Input}
 from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';

class SignupChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.validPassword = false;
    this.validFirstName = false;
    this.validLastName = false;
    this.validEmail = false;
    this.validUserName = false;
    this.handleInputFirstName = this.handleInputFirstName.bind(this);
    this.handleInputLastName = this.handleInputLastName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputUserName = this.handleInputUserName.bind(this);
    this.handleInputPassword =  this.handleInputPassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  handleInputFirstName(e) {
    this.validFirstName = e.target.value !== '' ? true : false;
    this.props.userInfo.firstName = e.target.value;
    this.props.handleInputFirstName(this.props.userInfo);
  }

  handleInputLastName(e) {
    this.validLastName = e.target.value !== '' ? true : false;
    this.props.userInfo.lastName = e.target.value;
    this.props.handleInputFirstName(this.props.userInfo);
  }

  handleInputEmail(e) {
    this.validEmail = this.validateEmail(e.target.value);
    this.props.userInfo.email = e.target.value;
    this.props.handleInputEmail(this.props.userInfo);
  }

  handleInputUserName(e) {
    this.validUserName = e.target.value !== '' ? true : false;
    this.props.userInfo.username = e.target.value;
    this.props.handleInputUserName(this.props.userInfo);
  }

  handleInputPassword(e) {
    if (e.target.value.length < 6) {
      this.validPassword = false;
    }else {
      this.validPassword = true;
      this.props.userInfo.password = e.target.value;
    }

    this.props.handleInputPassword(this.props.userInfo);
  }

  formSubmit(e) {
    e.preventDefault();

    if (!this.validFirstName) {
      this.props._errorMessage('Please Input the First Name');
    }else if (!this.validLastName) {
      this.props._errorMessage('Please Input the Last Name');
    }else if (!this.validEmail) {
      this.props._errorMessage('Please Input Correct Email Address');
    }else if (!this.validUserName) {
      this.props._errorMessage('Please Input the User Name');
    }else if (!this.validPassword) {
      this.props._errorMessage('Password Should Be Longer than 6 Charecters');
    }else {
      this.props.formSubmit(this.props.userInfo);
    }
  }

  render() {
    return (
      <Grid className="marginBottom">
        <Row>
          <h2 style={{ textAlign: 'center' }}>
            Sign Up
          </h2>
          <hr/>
          <Col md={3}/>
          <Col md={6}>
            <Well>
        <form onSubmit={this.formSubmit}>
          <Input
            placeholder="First Name"
            onChange={this.handleInputFirstName}
            label="First Name"
            type ="text" />
          <br/>
          <Input
            placeholder="Last Name"
            onChange={this.handleInputLastName}
            label ="Last Name"
            type ="text"/>
          <br/>
          <Input
            placeholder="Enter Email"
            onChange={this.handleInputEmail}
            label="Email"
            type ="text"/>
          <br/>
          <Input
            placeholder="User Name"
            onChange={this.handleInputUserName}
            label="User Name"
            type ="text"/>
          <br/>
          <Input
            placeholder="Enter Password"
            onChange={this.handleInputPassword}
            label="Password"
            type="password" />
          <br/>
          <Button type="submit" bsStyle="success">
            Sign up
          </Button> &nbsp; or&nbsp;
          <LinkContainer to="/signin"><a>Sign In</a></LinkContainer>
          <p className = "validationMsg">{this.props.error}</p>
        </form>
      </Well>
      </Col>
    </Row>
  </Grid>
);
  }
}

export default SignupChild;
