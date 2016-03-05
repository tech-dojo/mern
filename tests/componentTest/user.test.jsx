import React from 'react';
import expect from 'expect';
import {Grid, Row, Col, Input, Panel, ButtonInput, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import SigninChild from './../../app/components/users/SigninChild.jsx';
import SignupChild from './../../app/components/users/SignupChild.jsx';
import EditUserProfileChild from './../../app/components/users/EditUserProfileChild.jsx';

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

describe('SignupChild', () => {

  function handleInputFirstName()  {

  }

  function handleInputLastName()  {

  }

  function handleInputEmail()  {

  }

  function handleInputUserName()  {

  }

  function handleInputPassword()  {

  }

  function formSubmit()  {

  }

  function _errorMessage()  {

  }

  const error = 'I am an error';

  it('SignupChild is getting the necessary props', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<SignupChild handleInputFirstName = {handleInputFirstName}
      handleInputLastName = {handleInputLastName}
      handleInputEmail = {handleInputEmail}
      handleInputUserName = {handleInputUserName}
      handleInputPassword = {handleInputPassword}
      _errorMessage = {_errorMessage}
      formSubmit = {formSubmit}
      error = {error}/>);
    const actual = renderer.getRenderOutput();
    const expected = <form onSubmit={() => {}}>
      <Input

        placeholder="First Name"
        onChange={() => {}}

        label="First Name"
        type ="text" />
      <br/>
      <Input
        placeholder="Last Name"
        onChange={() => {}}

        label ="Last Name"
        type ="text"/>
      <br/>
      <Input
        placeholder="Enter Email"
        onChange={() => {}}

        label="Email"
        type ="text"/>
      <br/>
      <Input
        placeholder="User Name"
        onChange={() => {}}

        label="User Name"
        type ="text"/>
      <br/>
      <Input
        placeholder="Enter Password"
        onChange={() => {}}

        label="Password"
        type="password" />
      <br/>
      <Button type="submit" bsStyle="success">
        Sign up
      </Button> &nbsp; or&nbsp;
      <LinkContainer to="/signin"><a>Sign In</a></LinkContainer>
      <p className = "validationMsg">I am an error</p>
    </form>;

    expect(actual).toIncludeJSX(expected);

  });
});

describe('EditUserProfileChild', () => {

  function handleInputEditFirstName()  {

  }

  function handleInputEditLastName()  {

  }

  function handleInputEditEmail()  {

  }

  function handleInputEditUserName()  {

  }

  function handleInputPassword()  {

  }

  function formSubmit()  {

  }

  function _errorMessage()  {

  }

  const error = 'I am an error';
  const profileUpdateMsg = 'profile Updated';
  const EditUserInfo = { firstName: 'test', lastName: 'end',
     email: 'a@b.com', username: 'test end', password: '1234567890' };

  it('EditUserProfileChild is getting the necessary props', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<EditUserProfileChild handleInputEditFirstName = {handleInputEditFirstName}
      handleInputEditLastName = {handleInputEditLastName}
      handleInputEditEmail = {handleInputEditEmail}
      handleInputEditUserName = {handleInputEditUserName}
      handleInputPassword = {handleInputPassword}
      _errorMessage = {_errorMessage}
      formSubmit = {formSubmit}
      error = {error}
      profileUpdateMsg = {profileUpdateMsg}
      EditUserInfo= {EditUserInfo}
      />);
    const actual = renderer.getRenderOutput();
    const expected = <Grid className="marginBottom">
      <Row>
        <h2>
          Edit Your User Profile
        </h2>
        <hr/>
        <Col md={12}>

          <form onSubmit={() => {}}>
            <Input placeholder="First Name" value='test'

              onChange={() => {}} label="First Name" type="text"/>
            <br/>
            <Input placeholder="Last Name" value='end'

              onChange={() => {}} label="Last Name" type="text"/>
            <br/>
            <Input placeholder="Enter Email" value='a@b.com'

              onChange={() => {}} label="Email" type="text"/>
            <br/>
            <Input placeholder="User Name" value='test end'

              onChange={() => {}} label="User Name" type="text"/>
            <Input placeholder="Password" value='1234567890'

              onChange={() => {}} label="Password" type="text"/>
            <Button bsStyle="primary" type="submit">
              Save Profile
            </Button>
            <p className="validationMsg">I am an error</p>
            <p className="validationMsg">profile Updated</p>
          </form>
        </Col>
      </Row>
    </Grid>;

    expect(actual).toIncludeJSX(expected);

  });
});
