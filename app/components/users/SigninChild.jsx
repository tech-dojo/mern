import React from 'react';
import {Link} from 'react-router';
import {
  Grid,
  Row,
  Col,
  Button,
  Well,
  Input
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import auth from './../../services/Authentication';

class SigninChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.validEmailStatus = false;
    this.validPasswordInput = false;
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {

    if (e.keyCode === 13) {
      e.preventDefault();
      this._formSubmit(e);
    }
  }

  validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  _handleEmailChange(e) {
    this.setState({ error: '' });
    this.validEmailStatus = this.validateEmail(e.target.value);
    this.props._handleEmailChange(e.target.value);
  }

  _handlePasswordChange(e) {
    this.setState({ error: '' });
    if (e.target.value.length < 6) {
      this.validPasswordInput = false;

    } else {
      this.validPasswordInput = true;
    }

    this.props._handlePasswordChange(e.target.value);
  }

  _formSubmit(e) {
    e.preventDefault();

    if (!this.validPasswordInput) {
      this.props._errorMessage('Please Make Sure Password is More than Six Letters');
    } else if (!this.validEmailStatus) {
      if (this.state.email) {
        this.props._errorMessage('Invalid Email Address');
      } else {
        this.props._errorMessage('Please Input the Required Fields');
      }
    } else {
      this.props._errorMessage('Signing in ...');
      this.props._formSubmit(this.props.email, this.props.password);
    }
  }

  render() {
    return (
      <Grid>
        <Row>

          <h2 style={{ textAlign: 'center' }}>Sign In</h2>
          <hr/><Col md={3}/>
          <Col md={6}>
            <Well>
              <form className="commonWidth">
                <Input placeholder="Enter Email" onKeyDown={this.handleKeyDown} label="Email"
                   onChange={this._handleEmailChange} value={this.props.email} type="text"/>
                <br/>
                <Input placeholder="Enter Password" onKeyDown={this.handleKeyDown} label="Password"
                onChange={this._handlePasswordChange} value={this.props.password} type="password"/>
                <br/>
                <div className="commonCenter">
                  <Button bsStyle="success" onClick={this._formSubmit}>Sign in</Button>
                  &nbsp; or&nbsp;
                  <LinkContainer to="/signup">
                    <a>Sign up</a>
                  </LinkContainer>

                  <p className="validationMsg">{this.props.error}</p>
                </div>
              </form>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SigninChild;
