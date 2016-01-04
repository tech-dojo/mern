import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Panel, Pagination,Button, Well, Label, Input, ButtonInput} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

class Signin extends React.Component {
	constructor(props, context){
    super(props, context);
		this.state = {};
  }

  // _formSubmit(e) {
  // 		e.preventDefault();
  // 		if(this.state.errorPassword == '' && this.state.errorEmail == ''){
  // 			this.setState({error : 'Signing in ...'});
  // 			auth.login(this.state.email, this.state.password, this.history, (loggedIn) => {
  // 				if (!loggedIn)
  // 				return this.setState({ error: "Login Failed" })
  // 			})
  // 		}
  // 	}

    render(){
      return(
        <div>

          <h3>Sign In</h3>
            <form>
  						  <Input type="text" label="Username *" placeholder="Enter Email" />
  							<br/>
  							  <Input type="text" label="Password *" placeholder="Enter Password" />
  							<br/>
                  <ButtonInput type="submit" value="Submit Button" bsStyle="primary" />

  						</form>

        </div>
      )
    }
}

export default Signin;
