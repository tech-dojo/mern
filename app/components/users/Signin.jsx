import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label, Input, ButtonInput} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';

class Signin extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {};
		this.state.error = "";
		this.state.email = "";
		this.state.password = "";
		this.history = props.history;
		this.showSessionMsg = props.location.query? props.location.query.session:true;
		this._handlePasswordChange = this._handlePasswordChange.bind(this);
		this._handleEmailChange = this._handleEmailChange.bind(this);
		this._formSubmit = this._formSubmit.bind(this);
  }

	_handleEmailChange(e){
		this.state.errorEmail = "";
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(!e.target.value){
			this.state.errorEmail = "This field is required.";
		}else if(!re.test(e.target.value)){
			this.state.errorEmail = "Email is not valid.";
		}
		this.setState({errorEmail : this.state.errorEmail});
		this.setState({email : e.target.value});
	}
	_handlePasswordChange(e){
		this.state.errorPassword = "";
		if(!e.target.value){
			this.state.errorPassword = "This field is required.";
		}else if(e.target.value.length < 6){
			this.state.errorPassword = "Password needs more than 6 characters.";
		}
		this.setState({errorPassword : this.state.errorPassword});
		this.setState({password : e.target.value});

	}

	_formSubmit(e) {
		e.preventDefault();
		if(this.state.errorPassword == '' && this.state.errorEmail == ''){
			this.setState({error : 'Signing in ...'});
			auth.login(this.state.email, this.state.password, this.history, (loggedIn) => {
				if (!loggedIn)
				return this.setState({ error: "Login Failed" })

			})
		}
	}

	render(){
			return (

					<div>
						<h4>Sign In</h4>
							<form>
								<Input
									placeholder="Enter Email"
									errorText={this.state.errorEmail}
									label="Email"
									onChange={this._handleEmailChange}
									value={this.state.email}
									type ="text"
									/>
								<br/>
								<Input
									placeholder="Enter Password"
									errorText={this.state.errorPassword}
									label="Password"
									onChange={this._handlePasswordChange}
									value={this.state.password}
									type="password"
									/>
								<br/>

								<Button  bsStyle="success" onClick={this._formSubmit}>Submit</Button>
								<p>{this.state.error}</p>
							</form>

					</div>
			)
	}
}

export default Signin;
