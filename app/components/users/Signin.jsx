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
import UserStore from './../../stores/UserStore.jsx';
import SigninChild from './SigninChild.jsx';

function getError() {
  return { error: UserStore.getError() };
}

class Signin extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.state.error = '';
    this.state.email = '';
    this.state.password = '';
    this.router = context.router;
    this.showSessionMsg = props.location.query ?
    props.location.query.session : true;
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this._errorMessage = this._errorMessage.bind(this);
  }

  componentWillMount() {
    UserStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getError());
  }

  _errorMessage(err) {
    this.setState({ error: err });
  }

  _handleEmailChange(emailChild) {
    this.setState({ error: '' });
    this.setState({ email: emailChild });
  }

  _handlePasswordChange(passwordChild) {
    this.setState({ error: '' });
    this.setState({ password: passwordChild });

  }

  _formSubmit(emailChild, passwordChild) {
      this.setState({ error: 'Signing in ...' });
      auth.login(emailChild, passwordChild, this.router, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: 'Login Failed' });
      });
    }

  render() {
    return (
      <SigninChild _handleEmailChange = {this._handleEmailChange}
        _handlePasswordChange = {this._handlePasswordChange}
        _errorMessage = {this._errorMessage}
        _formSubmit = {this._formSubmit}
        email = {this.state.email}
        password = {this.state.password}
        error = {this.state.error}
        />
    );
  }
}

Signin.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Signin;
