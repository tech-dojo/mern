import React from 'react';
//import { Link } from 'react-router';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label, Input, ButtonInput} from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';

class Signup extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {};
		this.state.error = '';
		this.state.email = '';
		this.state.password = '';
		this.history = props.history;
    this.handleInputFirstName = this.handleInputFirstName.bind(this);
    this.handleInputLastName = this.handleInputLastName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputUserName = this.handleInputUserName.bind(this);
    this.handleInputPassword =  this.handleInputPassword.bind(this);
    //this._onChange = this._onChange.bind( this );
    this.formSubmit = this.formSubmit.bind(this);
		//this.showSessionMsg = props.location.query? props.location.query.session:true;
  }

  handleInputFirstName(e){
    this.state.errorFirstName = '';
    if(!e.target.value){
      this.state.errorFirstName = "First Name is required.";
    }
    this.setState({errorFirstName : this.state.errorFirstName});
    this.setState({firstName : e.target.value});
  }

  handleInputLastName(e){
    this.state.errorLastName = '';
    if(!e.target.value){
      this.state.errorLastName = "Last Name is required.";
    }
    this.setState({errorLastName : this.state.errorLastName});
    this.setState({lastName : e.target.value});
  }

  handleInputEmail(e){
		this.state.errorEmail = "";
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(!e.target.value){
			this.state.errorEmail = "Email is required.";
		}else if(!re.test(e.target.value)){
			this.state.errorEmail = "Email is not valid.";
		}
		this.setState({errorEmail : this.state.errorEmail});
		this.setState({email : e.target.value});
	}

  handleInputUserName(e){
    this.state.errorUserName = '';
    if(!e.target.value){
      this.state.errorUserName = "User Name is required.";
    }
    this.setState({errorUserName : this.state.errorUserName});
		this.setState({userName : e.target.value});
  }

  handleInputPassword(e){
		this.state.errorPassword = '';
		if(!e.target.value){
			this.state.errorPassword = "This field is required.";
		}
    else if(e.target.value.length < 6){
			this.state.errorPassword = "Password needs more than 6 characters.";
		}
		this.setState({errorPassword : this.state.errorPassword});
		this.setState({password : e.target.value});

	}

  formSubmit(e) {
    e.preventDefault();
    var userInfo = {
      firstName : this.state.FirstName,
      lastName : this.state.lastName,
      userName : this.state.userName,
      email : this.state.email,
      password : this.state.password
    }

  if(this.state.firstName == '' && this.state.lastName == '' && this.state.userName == '' && this.state.errorPassword == '' && this.state.errorEmail == ''){
    this.setState({error : 'Signing Up ...'});
    auth.signup(userInfo);
 }
}



render() {
  return(
  <div>
    <h3>Sign Up Using Email</h3>
		<form>
        <Input placeholder="First Name" type ="text"/>
        <br/>
        <Input placeholder="Last Name" type ="text"/>
        <br/>
        <Input placeholder="Enter Email" errorText={this.state.errorEmail} label="Email" type ="text"/>
        <br/>
        <Input placeholder="User Name" type ="text"/>
        <br/>
        <Input placeholder="Enter Password" errorText={this.state.errorPassword} label="Password" type="password" />

					<button>Sign up</button> &nbsp; or&nbsp;

		</form>
</div>
  )
}

}

export default Signup;
