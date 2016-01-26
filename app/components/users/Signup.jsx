import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label, Input, ButtonInput, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';

class Signup extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
    this.state.userInfo = {};
    this.state.error = '';
    this.state.email = '';
    this.state.password = '';
    this.validPassword=false;
    this.history = props.history;
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

  handleInputFirstName(e){
    this.validFirstName= e.target.value!=="" ? true : false;
    this.state.userInfo.firstName = e.target.value;
    this.setState({userInfo: this.state.userInfo});
    this.setState({error:''});
  }

  handleInputLastName(e){
    this.validLastName= e.target.value!=="" ? true : false;
    this.state.userInfo.lastName = e.target.value;
    this.setState({userInfo: this.state.userInfo});
    this.setState({error:''});
  }

  handleInputEmail(e){
    this.validEmail= this.validateEmail(e.target.value)
    this.state.userInfo.email = e.target.value;
    this.setState({userInfo : this.state.userInfo});
    this.setState({error:''});
  }

  handleInputUserName(e){
    this.validUserName= e.target.value!=="" ? true : false;
    this.state.userInfo.username = e.target.value;
    this.setState({userInfo: this.state.userInfo});
    this.setState({error:''});
  }

  handleInputPassword(e){
    this.setState({error : ''});
    if(e.target.value.length < 6){
      this.validatePassword= false;
    }
    else {
      this.validPassword= true;
      this.state.userInfo.password = e.target.value;
    }
    this.setState({userInfo: this.state.userInfo});
  //  this.setState({password : e.target.value});
  }

  formSubmit(e) {
    e.preventDefault();

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
        else if(!this.validPassword){
                this.setState({error : 'Password Should Be Longer than 6 Charecters'});
            }
    else{
      var newUser = this.state.userInfo;
      auth.signup(newUser);
    }
  }

  render() {
    return(
      <Grid>
        <Row>
          <h2>
            Sign up Using Email
          </h2>
          <hr/>
          <Col md={12}>


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
          <Button type="submit" bsStyle="primary">
            Sign up
          </Button> &nbsp; or&nbsp;
          <LinkContainer to="/signin"><a>Sign In</a></LinkContainer>
          <p className = "validationMsg">{this.state.error}</p>
        </form>
      </Col>
    </Row>
  </Grid>
    )
  }
}

export default Signup;
