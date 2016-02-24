import React from 'react';
import UserStore from './../../stores/UserStore.jsx';
import { Grid, Row, Col, Panel, Button, Input, ButtonInput} from 'react-bootstrap';
import UserForm from './UserForm.jsx';

function getUser(){
  return {EditUserInfo: UserStore.getUser()};
}

function profileUpdateMsg(){
  return {profileUpdateMsg: UserStore.getProfileUpdateMsg()};
}

class EditUserProfile extends React.Component {
  constructor(props) {
    super(props);
    UserStore.fetchUser(props.params.id);
    this.state = {};

      this.state = getUser();
  console.log(props.params.id);
    this.state.profileUpdMsg = '';

    this.history = props.history;

    console.log(this.state.EditUserInfo);
    }

  formSubmit(editedUserInfo) {
      UserStore.editUser(editedUserInfo, editedUserInfo._id);
  }


  onProfileUpdate(){
     this.setState(profileUpdateMsg());
  }

  render(){
    return(
      <Grid className="marginBottom">
        <Row>
          <h2>
            Edit Your User Profile
          </h2>
          <hr/>
          <Col md={12}>
            <UserForm formSubmit={this.formSubmit} userInfo={this.state.EditUserInfo}/>
            <p className = "validationMsg">{this.state.profileUpdateMsg}</p>
        </Col>
      </Row>
    </Grid>
    )
  }
}

export default EditUserProfile;
