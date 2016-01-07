import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label, Input, ButtonInput} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';
import ArticleStore from './../../stores/ArticleStore.jsx';


function getError() {
    return {error: ArticleStore.getError()}
}



class Signin extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {};
		this.state.error = "";
		this.state.email = "";
		this.state.password = "";
		this.history = props.history;
		this.validEmailStatus = false;
    this.validPasswordInput= false;
		this.showSessionMsg = props.location.query? props.location.query.session:true;
		this._handlePasswordChange = this._handlePasswordChange.bind(this);
		this._handleEmailChange = this._handleEmailChange.bind(this);
		this._formSubmit = this._formSubmit.bind(this);
		this._onChange = this._onChange.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind(this);
  }

	componentWillMount() {
			ArticleStore.onChange(this._onChange);
	}

	componentWillUnmount() {
			ArticleStore.removeChangeListener( this._onChange );
	}

	_onChange() {
			this.setState(
					getError()
					);
	}

	handleKeyDown(e) {

    if (e.keyCode === 13 ) {
e.preventDefault();
      this._formSubmit(e);
    }
}

validateEmail(email) {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
return re.test(email);
}

	_handleEmailChange(e){
	       	this.setState({error : ''});
	        this.validEmailStatus= this.validateEmail(e.target.value)
	        this.setState({email : e.target.value});
	}
	_handlePasswordChange(e){
		this.setState({error : ''});
		if(e.target.value.length < 6){
       this.validPasswordInput= false;

		}
		else {
			this.validPasswordInput= true;
		}
		this.setState({password : e.target.value});

	}

	_formSubmit(e) {
		e.preventDefault();

		if(!this.validPasswordInput){
			this.setState({error : 'please make sure password is more than 6 letters'});
	}
		else if(!this.validEmailStatus){
			 if(this.state.email){
						this.setState({error : 'Invalid Email Address'});

				 }
				 else{

						 this.setState({error : 'please input the required fields'});
				 }
	}
		else{
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
									onKeyDown={this.handleKeyDown}
									label="Email"
									onChange={this._handleEmailChange}
									value={this.state.email}
									type ="text"
									/>
								<br/>
								<Input
									placeholder="Enter Password"
									onKeyDown={this.handleKeyDown}
									label="Password"
									onChange={this._handlePasswordChange}
									value={this.state.password}
									type="password"
									/>
								<br/>

								<Button  bsStyle="success"  onClick={this._formSubmit}>Submit</Button>
								<p>{this.state.error}</p>
							</form>

					</div>
			)
	}
}

export default Signin;
