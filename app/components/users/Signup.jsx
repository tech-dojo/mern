import React from 'react';
import { Link } from 'react-router';
import {Grid, Row, Col, Well} from 'react-bootstrap';
import auth from './../../services/Authentication';
import UserForm from './UserForm.jsx';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.history = props.history;
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(newUser) {
    auth.signup(newUser);
    }

  render() {
    return(
      <Grid className="marginBottom">
        <Row>
          <h2 style={{textAlign: 'center'}}>
            Sign Up
          </h2>
          <hr/>
          <Col md={3}/>
          <Col md={6}>
            <Well>
              <UserForm formSubmit={this.formSubmit}/>
            </Well>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Signup;
