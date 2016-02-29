import React from 'react';
import expect from 'expect';
import {Grid, Row, Col, Input, Panel, ButtonInput, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import SigninChild from './../../../app/components/users/SigninChild.jsx';

describe('SigninChild', () => {

  function _handleEmailChange()  {

  }

  function _handlePasswordChange()  {

  }

  function _formSubmit()  {

  }

  function _errorMessage()  {

  }

  const email = 'hello@bye.com';
  const error = 'I am an error';
  const password = '1234567890';

  it('SigninChild is getting the necessary props', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<SigninChild _handleEmailChange = {_handleEmailChange}
      _handlePasswordChange = {_handlePasswordChange}
      _errorMessage = {_errorMessage}
      _formSubmit = {_formSubmit}
      email = {email}
      password = {password}
      error = {error}/>);
    const actual = renderer.getRenderOutput();
    const expected = <form className="commonWidth">
      <Input placeholder="Enter Email" onKeyDown={() => {}} label="Email"

       onChange={() => {}} value='hello@bye.com' type="text"/>
    <br/>
    <Input placeholder="Enter Password" onKeyDown={() => {}} label="Password"

    onChange={() => {}} value='1234567890' type="password"/>
    <br/>
    <div className="commonCenter">
      <Button bsStyle="success" onClick={() => {}}>Sign in</Button>
        &nbsp; or&nbsp;
        <LinkContainer to="/signup">
          <a>Sign up</a>
        </LinkContainer>

        <p className="validationMsg">I am an error</p>
      </div>
    </form>;

    expect(actual).toIncludeJSX(expected);

  });
});
