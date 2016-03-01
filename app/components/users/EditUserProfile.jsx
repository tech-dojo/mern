import React from 'react';
import UserStore from './../../stores/UserStore.jsx';
import {
  Grid,
  Row,
  Col,
  Button,
  Input
} from 'react-bootstrap';
import EditUserProfileChild from './EditUserProfileChild.jsx';

function getUser() {
  return { EditUserInfo: UserStore.getUser() };
}

function profileUpdateMsg() {
  return { profileUpdateMsg: UserStore.getProfileUpdateMsg() };
}

class EditUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    UserStore.fetchUser(props.params.id);
    this.state.error = '';
    this.state.EditUserInfo = {};
    this.state.EditUserInfo.password = '';
    this.state.profileUpdateMsg = '';
    this.state = getUser();
    this.history = props.history;
    this.handleInputEditFirstName = this.handleInputEditFirstName.bind(this);
    this.handleInputEditLastName = this.handleInputEditLastName.bind(this);
    this.handleInputEditEmail = this.handleInputEditEmail.bind(this);
    this.handleInputEditUserName = this.handleInputEditUserName.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this.onProfileUpdate = this.onProfileUpdate.bind(this);
    this._errorMessage = this._errorMessage.bind(this);
  }

  handleInputEditFirstName(editUserInfo) {
    this.setState({ EditUserInfo: editUserInfo });
    this.setState({ error: '' });
  }

  handleInputEditLastName(editUserInfo) {
    this.setState({ EditUserInfo: editUserInfo });
    this.setState({ error: '' });
  }

  handleInputEditEmail(editUserInfo) {
    this.setState({ EditUserInfo: editUserInfo });
    this.setState({ error: '' });
  }

  handleInputEditUserName(editUserInfo) {
    this.setState({ EditUserInfo: editUserInfo });
    this.setState({ error: '' });
  }

  handleInputPassword(editUserInfo) {
    this.setState({ error: '' });
    this.setState({ EditUserInfo: editUserInfo });
  }

  _errorMessage(err) {
    this.setState({ error: err });
  }

  formSubmit(editUserInfo) {
    UserStore.editUser(editUserInfo, this.state.EditUserInfo._id);
  }

  componentWillMount() {
    UserStore.onChange(this._onChange);
    UserStore.onChange(this.onProfileUpdate);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
    UserStore.removeChangeListener(this.onProfileUpdate);
  }

  onProfileUpdate() {
    this.setState(profileUpdateMsg());
  }

  _onChange() {
    this.setState(getUser());
  }

  render() {
    return (
<EditUserProfileChild handleInputEditFirstName = {this.handleInputEditFirstName}
  handleInputEditLastName = {this.handleInputEditLastName}
  handleInputEditEmail = {this.handleInputEditEmail}
  handleInputEditUserName = {this.handleInputEditUserName}
  handleInputPassword = {this.handleInputPassword}
  _errorMessage = {this._errorMessage}
  formSubmit = {this.formSubmit}
  profileUpdateMsg = {this.state.profileUpdateMsg}
  error = {this.state.error}
  EditUserInfo= {this.state.EditUserInfo}
  />
);
  }
}

export default EditUserProfile;
