import React from 'react';
import UserStore from './../../stores/UserStore.jsx';
import {
  Grid,
  Row,
  Col,
  Button,
  Input
} from 'react-bootstrap';

class EditUserProfileChild extends React.Component {
  constructor(props) {
    super(props);
    this.validFirstName = true;
    this.validLastName = true;
    this.validEmail = true;
    this.validUserName = true;
    this.validPassword = true;
    this.handleInputEditFirstName = this.handleInputEditFirstName.bind(this);
    this.handleInputEditLastName = this.handleInputEditLastName.bind(this);
    this.handleInputEditEmail = this.handleInputEditEmail.bind(this);
    this.handleInputEditUserName = this.handleInputEditUserName.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  handleInputEditFirstName(e) {
    this.validFirstName = e.target.value !== '' ? true : false;
    this.props.EditUserInfo.firstName = e.target.value;
    this.props.handleInputEditFirstName(this.props.EditUserInfo);
  }

  handleInputEditLastName(e) {
    this.validLastName = e.target.value !== '' ? true : false;
    this.props.EditUserInfo.lastName = e.target.value;
    this.props.handleInputEditLastName(this.props.EditUserInfo);
  }

  handleInputEditEmail(e) {
    this.validEmail = this.validateEmail(e.target.value);
    this.props.EditUserInfo.email = e.target.value;
    this.props.handleInputEditEmail(this.props.EditUserInfo);
  }

  handleInputEditUserName(e) {
    this.validUserName = e.target.value !== ''
      ? true : false;
    this.props.EditUserInfo.username = e.target.value;
    this.props.handleInputEditUserName(this.props.EditUserInfo);
  }

  handleInputPassword(e) {
    if (e.target.value.length < 7) {
      this.props.EditUserInfo.password = e.target.value;
      this.validPassword = false;
    } else {
      this.validPassword = true;
      this.props.EditUserInfo.password = e.target.value;
    }

    this.props.handleInputPassword(this.props.EditUserInfo);
  }

  formSubmit(e) {
    e.preventDefault();
    if (!this.validFirstName) {
      this.props._errorMessage('Please Input the First Name');
    } else if (!this.validLastName) {
      this.props._errorMessage('Please Input the Last Name');
    } else if (!this.validEmail) {
      this.props._errorMessage('Please Input Correct Email Address');
    } else if (!this.validUserName) {
      this.props._errorMessage('Please Input the User Name');
    } else if (!this.validPassword) {
      this.props._errorMessage('Password Should Be Longer than 6 Charecters');
    } else {
      this.props.formSubmit(this.props.EditUserInfo);
    }

  }

  render() {
    var editUser = this.props.EditUserInfo;
    return (

      <Grid className="marginBottom">
        <Row>
          <h2>
            Edit Your User Profile
          </h2>
          <hr/>
          <Col md={12}>

            <form onSubmit={this.formSubmit}>
              <Input placeholder="First Name" value={editUser.firstName}
                onChange={this.handleInputEditFirstName} label="First Name" type="text"/>
              <br/>
              <Input placeholder="Last Name" value={editUser.lastName}
                onChange={this.handleInputEditLastName} label="Last Name" type="text"/>
              <br/>
              <Input placeholder="Enter Email" value={editUser.email}
                onChange={this.handleInputEditEmail} label="Email" type="text"/>
              <br/>
              <Input placeholder="User Name" value={editUser.username}
                onChange={this.handleInputEditUserName} label="User Name" type="text"/>
              <Input placeholder="Password" value={editUser.password}
                onChange={this.handleInputPassword} label="Password" type="text"/>
              <Button bsStyle="primary" type="submit">
                Save Profile
              </Button>
              <p className="validationMsg">{this.props.error}</p>
              <p className="validationMsg">{this.props.profileUpdateMsg}</p>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default EditUserProfileChild;
