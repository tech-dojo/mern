import React from 'react';
import UserStore from './../../stores/UserStore.jsx';
import { Grid, Row, Col, Panel, Button, Input, ButtonInput} from 'react-bootstrap'

function getUser(){
  return {EditUserInfo: UserStore.getUser()};
}

function profileUpdateMsg(){
  return {profileUpdateMsg: UserStore.getProfileUpdateMsg()};
}

class EditUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    UserStore.fetchUser(props.params.id);
    this.state.error = '';
    this.state.EditUserInfo = {};
    this.state.error = '';
    this.state.profileUpdMsg = '';

    this.state = getUser();

    this.validFirstName= true;
    this.validLastName= true;
    this.validEmail= true;
    this.validUserName= true;
    this.history = props.history;
    this.handleInputEditFirstName = this.handleInputEditFirstName.bind(this);
    this.handleInputEditLastName = this.handleInputEditLastName.bind(this);
    this.handleInputEditEmail = this.handleInputEditEmail.bind(this);
    this.handleInputEditUserName = this.handleInputEditUserName.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this.onProfileUpdate= this.onProfileUpdate.bind(this);
  }

  validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  handleInputEditFirstName(e){
    this.validFirstName= e.target.value!=="" ? true : false;
    this.state.EditUserInfo.firstName = e.target.value;
    this.setState({EditUserInfo: this.state.EditUserInfo});
    this.setState({error:''});
  }

  handleInputEditLastName(e){
    this.validLastName= e.target.value!=="" ? true : false;
    this.state.EditUserInfo.lastName = e.target.value;
    this.setState({EditUserInfo: this.state.EditUserInfo});
    this.setState({error:''});
  }

  handleInputEditEmail(e){
    this.validEmail= this.validateEmail(e.target.value)
    this.state.EditUserInfo.email = e.target.value;
    this.setState({EditUserInfo : this.state.EditUserInfo});
    this.setState({error:''});
  }

  handleInputEditUserName(e){
    this.validUserName= e.target.value!=="" ? true : false;
    this.state.EditUserInfo.username = e.target.value;
    this.setState({EditUserInfo: this.state.EditUserInfo});
    this.setState({error:''});
  }

  formSubmit(e) {
    e.preventDefault();
console.log("edit enter");
    if(!this.validFirstName){
          this.setState({error : 'Please Input the First Name'});
        }
    else if(!this.validLastName){
              this.setState({error : 'Please Input the Last Name'});
            }
            else if(!this.validEmail){
                      this.setState({error : 'Please Input Correct Email Address'});
                    }
    else if(!this.validUserName){
            this.setState({error : 'Please Input the User Name'});
        }

    else{
      UserStore.editUser(this.state.EditUserInfo, this.state.EditUserInfo._id);
    }
  }

  componentWillMount() {
      UserStore.onChange(this._onChange);
      UserStore.onChange(this.onProfileUpdate);
  }

  onProfileUpdate(){

     this.setState(profileUpdateMsg());
  }

  _onChange() {
     this.setState( getUser() );
 }

  render(){
    var editUser = this.state.EditUserInfo;
    return(
      <Grid>
        <Row>
          <h2>
            Edit Your User Profile
          </h2>
          <hr/>
          <Col md={12}>

        <form onSubmit={this.formSubmit}>
          <Input
            placeholder="First Name"
            value={editUser.firstName}
            onChange={this.handleInputEditFirstName}
            label="First Name"
            type ="text" />
          <br/>
          <Input
            placeholder="Last Name"
            value={editUser.lastName}
            onChange={this.handleInputEditLastName}
            label ="Last Name"
            type ="text"/>
          <br/>
          <Input
            placeholder="Enter Email"
            value={editUser.email}
            onChange={this.handleInputEditEmail}
            label="Email"
            type ="text"/>
          <br/>
          <Input
            placeholder="User Name"
            value={editUser.username}
            onChange={this.handleInputEditUserName}
            label="User Name"
            type ="text"/>
          <Button bsStyle="primary" type="submit">
              Save Profile
            </Button>
            <p className = "validationMsg">{this.state.error}</p>
            <p className = "validationMsg">{this.state.profileUpdateMsg}</p>
          </form>
        </Col>
      </Row>
    </Grid>
    )
  }
}

export default EditUserProfile;
